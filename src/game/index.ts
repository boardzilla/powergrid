/**
 * TODO
 * 2-player rules add Trust...
 */

import {
  createGame,
  createBoardClasses,
  Player,
  Board,
  playerActions,
  ifElse,
  loop,
  whileLoop,
  eachPlayer,
  Do,
  union,
} from '@boardzilla/core';

import { cards } from './cards.js';

export class PowergridPlayer extends Player<PowergridPlayer, PowergridBoard> {
  score: number = 0;
  elektro: number = 50;
  cities: number = 0;
  passedThisAuction: boolean = false;
  havePassedAuctionPhase: boolean = false;
  finishedPhase: boolean = false;

  turnFinished() {
    this.finishedPhase = true;
  }

};

type GamePhase = 'auction' | 'resources' | 'build' | 'power';
type ResourceType = 'coal' | 'oil' | 'garbage' | 'uranium'
const resourceTypes: ResourceType[] = ['coal', 'oil', 'garbage', 'uranium'];

export class PowergridBoard extends Board<PowergridPlayer, PowergridBoard> {
  step: number = 1;
  phase: GamePhase = 'auction'; 
  turn: number = 0;
  zones: string[] = [];
  lastBid?: number;
  playerWithHighestBid?: PowergridPlayer;
  noMoreUranium = false;
  roundOrder: PowergridPlayer[] = [];

  sortPlayers(direction: 'asc' | 'desc') {
    this.game.players.sortBy([
      'score',
      player => player.allMy(Card).max('cost') || 0
    ], direction);
  }

  startNewPhase(gamephase : GamePhase) {
    this.game.message("New phase: " + gamephase);
    this.phase = gamephase;
    this.game.players.forEach(player => player.finishedPhase = false)
  }

  applyMinimumRule() {
    const powerplants = this.first('powerplants')!;
    for (const card of powerplants.all(Card)) {
      if (card.cost <= this.game.players.max('score')) {
        this.game.message('{{card}} is below the minimum and is discarded', {card});
        this.game.addDelay();
        card.remove();
        this.first('deck')!.top(Card)?.putInto(powerplants);
      }
    }
  };

  refillResources(resource: ResourceType, amount: number) {
    if (resource === 'uranium' && this.noMoreUranium) return;
    for (const space of this.lastN(amount, ResourceSpace, {resource, empty: true})) {
      this.pile.first(Resource, resource)?.putInto(space)
    };
  }
}

const {Space, Piece} = createBoardClasses<PowergridPlayer, PowergridBoard>();

export {Space};

export class Card extends Piece {
  cost: number;
  resourceType?: ResourceType | 'hybrid' | 'clean';
  resources?: number;
  power?: number;
  auction?: boolean = false;
  discount?: boolean = false;
  powered?: boolean = false;

  purchaseCost() {
    return this.discount ? 1 : this.cost;
  }

  spaceFor(resource: ResourceType) {
    if (this.resourceType === resource || (this.resourceType === 'hybrid' && ['oil', 'coal'].includes(resource))) {
      return this.resources! * 2 - this.all(Resource).length;
    }
    return 0;
  }

  resourcesAvailableToPower() {
    const availableResources = this.all(Resource);
    if (availableResources.length >= this.resources!) return availableResources;
  }
}

export class Resource extends Piece {
  type: ResourceType;
}

export class ResourceSpace extends Space {
  resource: ResourceType;
  cost: number;
}

export class City extends Space {
  owners: PowergridPlayer[] = [];
  zone: string

  costToBuild() {
    const closestCity = this.closest(City, city => city.has(Building, {mine: true}));
    return [10, 15, 20][this.owners.length] + (closestCity ? this.distanceTo(closestCity)! : 0);
  }

  canBuild() {
    return this.board.zones.includes(this.zone) &&
      !this.has(Building, {mine: true}) &&
      this.owners.length < this.board.step;
  }

  canBuildFor(elektro: number) {
    return this.canBuild() && elektro >= this.costToBuild();
  }
}

export class PlayerMat extends Space {
  player: PowergridPlayer
}

export class Building extends Piece {
  powered?: boolean = false;
}

const refill = {
  coal: [
    [3, 4, 3],
    [3, 4, 3],
    [4, 5, 3],
    [5, 6, 4],
    [5, 7, 5],
    [7, 9, 6],
  ],
  oil: [
    [2, 2, 4],
    [2, 2, 4],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [5, 6, 7],
  ],
  garbage: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [2, 3, 4],
    [3, 3, 5],
    [3, 5, 6],
  ],
  uranium: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 2, 2],
    [2, 3, 2],
    [2, 3, 3],
  ],
};

const income = [10, 22, 33, 44, 54, 64, 73, 82, 90, 98, 105, 112, 118, 124, 129, 134, 138, 142, 145, 148, 150];
const victory = [18, 17, 17, 15, 14];

export default createGame(PowergridPlayer, PowergridBoard, game => {

  const { board, action } = game;

  board.registerClasses(
    Card,
    Resource,
    ResourceSpace,
    City,
    Building,
    PlayerMat
  );

  const map = board.create(Space, 'germany');

  const cuxhaven = map.create(City, 'Cuxhaven', {zone: 'green'})
  const bremen = map.create(City, 'Bremen', {zone: 'green'})
    .connectTo(cuxhaven, 8)
  const hannover = map.create(City, 'Hannover', {zone: 'green'})
    .connectTo(bremen, 10)
  const hamburg = map.create(City, 'Hamburg', {zone: 'green'})
    .connectTo(cuxhaven, 11)
    .connectTo(bremen, 11)
    .connectTo(hannover, 17)
  const kiel = map.create(City, 'Kiel', {zone: 'green'})
    .connectTo(hamburg, 8)
  map.create(City, 'Flensburg', {zone: 'green'})
    .connectTo(kiel, 4)
  const wilhelmshaven = map.create(City, 'Wilhelmshaven', {zone: 'green'})
    .connectTo(bremen, 11)

  const osnabruck = map.create(City, 'Osnabruck', {zone: 'red'})
    .connectTo(wilhelmshaven, 14)
    .connectTo(bremen, 11)
    .connectTo(hannover, 16)
  const munster = map.create(City, 'Münster', {zone: 'red'})
    .connectTo(osnabruck, 7)
  const essen = map.create(City, 'Essen', {zone: 'red'})
    .connectTo(munster, 6)
  map.create(City, 'Duisberg', {zone: 'red'})
    .connectTo(essen, 0)
  const dusseldorf = map.create(City, 'Dusseldorf', {zone: 'red'})
    .connectTo(essen, 2)
  const dortmund = map.create(City, 'Dortmund', {zone: 'red'})
    .connectTo(essen, 4)
    .connectTo(munster, 2)
  const kassel = map.create(City, 'Kassel', {zone: 'red'})
    .connectTo(hannover, 15)
    .connectTo(osnabruck, 20)
    .connectTo(dortmund, 18)

  const lubeck = map.create(City, 'Lübeck', {zone: 'brown'})
    .connectTo(kiel, 4)
    .connectTo(hamburg, 6)
  const schwerin = map.create(City, 'Schwerin', {zone: 'brown'})
    .connectTo(lubeck, 6)
    .connectTo(hamburg, 8)
    .connectTo(hannover, 19)
  const rostock = map.create(City, 'Rostock', {zone: 'brown'})
    .connectTo(schwerin, 6)
  const torgelow = map.create(City, 'Torgelow', {zone: 'brown'})
    .connectTo(rostock, 19)
    .connectTo(schwerin, 19)
  const berlin = map.create(City, 'Berlin', {zone: 'brown'})
    .connectTo(schwerin, 18)
    .connectTo(torgelow, 15)
  const magdeburg = map.create(City, 'Magdeburg', {zone: 'brown'})
    .connectTo(schwerin, 16)
    .connectTo(hannover, 15)
    .connectTo(berlin, 10)
  const frankfurto = map.create(City, 'Frankfurt-O', {zone: 'brown'})
    .connectTo(berlin, 6)

  const halle = map.create(City, 'Halle', {zone: 'yellow'})
    .connectTo(magdeburg, 11)
    .connectTo(berlin, 17)
  const leipzig = map.create(City, 'Leipzig', {zone: 'yellow'})
    .connectTo(halle, 0)
    .connectTo(frankfurto, 21)
  const dresden = map.create(City, 'Dresden', {zone: 'yellow'})
    .connectTo(leipzig, 13)
    .connectTo(frankfurto, 16)
  const erfurt = map.create(City, 'Erfurt', {zone: 'yellow'})
    .connectTo(halle, 6)
    .connectTo(hannover, 19)
    .connectTo(kassel, 15)
    .connectTo(dresden, 19)
  const fulda = map.create(City, 'Fulda', {zone: 'yellow'})
    .connectTo(kassel, 8)
    .connectTo(erfurt, 13)
  const wurzburg = map.create(City, 'Wurzburg', {zone: 'yellow'})
    .connectTo(fulda, 11)
  const nurnberg = map.create(City, 'Nurnberg', {zone: 'yellow'})
    .connectTo(wurzburg, 8)
    .connectTo(erfurt, 21)

  const koln = map.create(City, 'Koln', {zone: 'blue'})
    .connectTo(dusseldorf, 4)
    .connectTo(dortmund, 10)
  const aachen = map.create(City, 'Aachen', {zone: 'blue'})
    .connectTo(dusseldorf, 9)
    .connectTo(koln, 7)
  const trier = map.create(City, 'Trier', {zone: 'blue'})
    .connectTo(aachen, 19)
    .connectTo(koln, 20)
  const wiesbaden = map.create(City, 'Wiesbaden', {zone: 'blue'})
    .connectTo(koln, 21)
    .connectTo(trier, 18)
  map.create(City, 'Frankfurt-M', {zone: 'blue'})
    .connectTo(dortmund, 20)
    .connectTo(kassel, 13)
    .connectTo(fulda, 8)
    .connectTo(wiesbaden, 0)
    .connectTo(wurzburg, 13)
  const saarbrucken = map.create(City, 'Saarbrucken', {zone: 'blue'})
    .connectTo(trier, 11)
    .connectTo(wiesbaden, 10)
  const mannheim = map.create(City, 'Mannheim', {zone: 'blue'})
    .connectTo(wiesbaden, 11)
    .connectTo(saarbrucken, 11)
    .connectTo(wurzburg, 10)

  const stuttgart = map.create(City, 'Stuttgart', {zone: 'purple'})
    .connectTo(saarbrucken, 17)
    .connectTo(mannheim, 6)
    .connectTo(wurzburg, 12)
  const freiburg = map.create(City, 'Freiburg', {zone: 'purple'})
    .connectTo(stuttgart, 16)
  const konstanz = map.create(City, 'Konstanz', {zone: 'purple'})
    .connectTo(freiburg, 14)
    .connectTo(stuttgart, 16)
  const augsburg = map.create(City, 'Augsburg', {zone: 'purple'})
    .connectTo(stuttgart, 15)
    .connectTo(konstanz, 17)
    .connectTo(wurzburg, 19)
    .connectTo(nurnberg, 18)
  const regensburg = map.create(City, 'Regensburg', {zone: 'purple'})
    .connectTo(nurnberg, 12)
    .connectTo(augsburg, 13)
  const munchen = map.create(City, 'Munchen', {zone: 'purple'})
    .connectTo(augsburg, 6)
    .connectTo(regensburg, 10)
  map.create(City, 'Passau', {zone: 'purple'})
    .connectTo(regensburg, 12)
    .connectTo(munchen, 14)

  const resources = board.create(Space, 'resources');
  for (let cost = 1; cost <= 8; cost++) {
    resources.createMany(3, ResourceSpace, `coal-${cost}`, { cost, resource: 'coal' });
    resources.createMany(3, ResourceSpace, `oil-${cost}`, { cost, resource: 'oil' });
    resources.createMany(3, ResourceSpace, `garbage-${cost}`, { cost, resource: 'garbage' });
    resources.create(ResourceSpace, `uranium-${cost}`, { cost, resource: 'uranium' });
  };
  resources.create(ResourceSpace, 'uranium-10', { cost: 10, resource: 'uranium' });
  resources.create(ResourceSpace, 'uranium-12', { cost: 12, resource: 'uranium' });
  resources.create(ResourceSpace, 'uranium-14', { cost: 14, resource: 'uranium' });
  resources.create(ResourceSpace, 'uranium-16', { cost: 16, resource: 'uranium' });

  const powerplants = board.create(Space, 'powerplants');

  powerplants.onEnter(Card, c => {
    c.showToAll();
    board.applyMinimumRule();
    powerplants.sortBy<Card>('cost');
    const discount = powerplants.first(Card, { discount: true });
    if (discount && powerplants.first(Card) !== discount) {
      game.message('Removing discount because of a lower power plant');
      game.addDelay();
      powerplants.first(Card)!.remove();
      discount.discount = false;
      deck.top(Card)?.putInto(powerplants);
    }
    if (Card.name === 'step-3') deck.shuffle();
  })

  const deck = board.create(Space, 'deck');
  deck.setOrder('stacking');
  deck.onEnter(Card, c => c.hideFromAll());

  for (const [name, attrs] of Object.entries(cards)) deck.create(Card, name, attrs);
  board.pile.createMany(24, Resource, 'coal', { type: 'coal' });
  board.pile.createMany(24, Resource, 'oil', { type: 'oil' });
  board.pile.createMany(24, Resource, 'garbage', { type: 'garbage' });
  board.pile.createMany(12, Resource, 'uranium', { type: 'uranium' });

  for (const player of game.players) {
    const mat = board.create(PlayerMat, 'player-mat', { player });
    mat.createMany(22, Building, 'building', { player });
    mat.onEnter(Card, c => {
      c.auction = false
      c.discount = false
      if (c.name === 'nuclear-39' && map.name === 'germany') {
        game.message('Uranium is now no longer available');
        board.noMoreUranium = true
      }
    });
  };

  const costOf = (resource: ResourceType, amount: number) => {
    if (amount > resources.all(resource).length) return Infinity;
    return resources.firstN(amount, resource).sum(resource => resource.container(ResourceSpace)!.cost)
  };

  game.defineActions({
    selectZone: () => action({
      prompt: 'Choose playing zone',
    }).chooseOnBoard(
      'city', () => board.all(City, city => board.zones.length === 0 || board.all(City, c => (
        !board.zones.includes(c.zone) &&
          c.adjacencies(City, z => board.zones.includes(z.zone)).length > 0
      )).map(c => c.zone).includes(city.zone))
    ).do(
      ({ city }) => { board.zones.push(city.zone) }
    ),

    auction: () => action({
      prompt: 'Choose a factory for auction',
      condition: !board.has(Card, {auction: true}),
    }).chooseOnBoard(
      'card', powerplants.firstN(board.step === 3 ? 8 : 4, Card)
    ).do(
      ({ card }) => { card.auction = true }
    ).message(
      `{{player}} put {{card}} up for auction`
    ),

    bid: player => action({
      condition: !player.passedThisAuction
    }).chooseNumber('bid', {
      min: board.lastBid ? board.lastBid + 1 : board.first(Card, {auction: true})?.purchaseCost(),
      max: player.elektro,
      confirm: 'Place bid'
    }).do(({ bid }) => {
      board.lastBid = bid;
      board.playerWithHighestBid = player;
    }).message(
      `{{player}} bid {{bid}} on {{plant}}`, {plant: board.first(Card, {auction: true})!}
    ),

    passAuction: player => action({
      prompt: 'Pass this auction',
      condition: board.turn > 1
    }).do(() => {
      player.havePassedAuctionPhase = true
      player.turnFinished();
    }).message(
      `{{player}} passes the auction round`
    ),

    passBid: player => action({
      prompt: 'Pass',
      condition: board.lastBid !== undefined
    }).do(() => {
      player.passedThisAuction = true
    }).message(
      `{{player}} passes`
    ),

    scrap: player => action({
      prompt: 'You must scrap one of your powerplants',
    }).chooseOnBoard(
      'card', player.allMy(Card)
    ).do(({ card }) => {
      // place each resource onto any other of players' cards that has room for it, including the auctioned card
      for (const resource of card.all(Resource)) {
        let other = union(board.all(Card, {mine: true}), powerplants.first(Card, {auction: true}))
          .first(Card, other => other !== card && other.spaceFor(resource.type) > 0);
        if (other) resource.putInto(other);
      }
      card.remove();
    }).message(
      `{{player}} scraps their {{card}}`
    ),

    pass: player => action({
      prompt: 'Done' }
    ).do(() => {
        player.turnFinished();
      } 
    ),

    build: player => action({
      prompt: 'Select cities for building'
    }).chooseOnBoard(
      'city', map.all(City, city => city.canBuildFor(player.elektro)),
      {
        confirm: [
          `Build {{city}} for {{cost}} Elektro`,
          ({ city }) => ({ cost: city.costToBuild() })
        ]
      }
    ).do(({ city }) => {
      board.first(PlayerMat, { player })!.first(Building)!.putInto(city);
      player.elektro -= city.costToBuild();
      city.owners.push(player);
      player.score = map.all(Building, {mine: true}).length;
      board.applyMinimumRule();
    }),

    arrangeResources: player => action({
      prompt: 'Arrange resources'
    }).chooseOnBoard(
      'resource', player.allMy(Resource),
    ).chooseOnBoard(
      'card', ({ resource }) => resource.container(Card)!.others(Card, card => card.spaceFor(resource.type) > 0),
      { prompt: 'to where' }
    ).move('resource', 'card'),

    power: player => action({
      prompt: 'Power your plants',
      condition: map.has(Building, {player, powered: false})
    }).chooseOnBoard(
      'card', player.allMy(Card, c => !c.powered && !!c.resourcesAvailableToPower()), {
        prompt: 'Select plant to power',
        skipIf: 'never',
      }
    ).chooseOnBoard(
      'resources', ({ card }) => card.resourcesAvailableToPower()!, {
        prompt: 'Select resources for power',
        number: ({ card }) => card.resources!,
        skipIf: ({ card }) => (
          card.resourcesAvailableToPower()!.areAllEqual('type')
            || card.resourcesAvailableToPower()!.length === card.resources
        )
      }
    ).do(({ card, resources }) => {
      card.powered = true;
      if (!resources) resources = card.firstN(card.resources!, Resource);
      for (const resource of resources) resource.remove();
      for (const building of map.firstN(card.power!, Building, {mine: true, powered: false})) building.powered = true;
    }),

    buyResource: player => action({
      prompt: 'Buy resources'
    }).chooseGroup({
      coal: ['number', {
        prompt: 'Buy Coal',
        min: 0,
        max: player.allMy(Card).sum(card => card.spaceFor('coal')),
      }],
      oil: ['number', {
        prompt: 'Buy Oil',
        min: 0,
        max: player.allMy(Card).sum(card => card.spaceFor('oil'))
      }],
      garbage: ['number', {
        prompt: 'Buy Garbage',
        min: 0,
        max: player.allMy(Card).sum(card => card.spaceFor('garbage')),
      }],
      uranium: ['number', {
        prompt: 'Buy Uranium',
        min: 0,
        max: player.allMy(Card).sum(card => card.spaceFor('uranium')),
      }],
    }, {
      validate: ({ coal, oil, garbage, uranium }) => {
        if (coal + oil + garbage + uranium === 0) return 'Cannot purchase zero';
        if (coal + oil >
          player.allMy(Card).sum(card => card.spaceFor('coal')) +
            player.allMy(Card, { resourceType: 'oil' }).sum(card => card.spaceFor('oil'))
        ) {
          return 'Not enough space';
        }
        if (costOf('coal', coal) + costOf('oil', oil) + costOf('garbage', garbage) + costOf('uranium', uranium) > player.elektro) return 'Insufficient Elektro';
      },
      confirm: [
        `Pay {{cost}} Elektro`,
        ({ coal, oil, garbage, uranium }) => ({ cost: costOf('coal', coal) + costOf('oil', oil) + costOf('garbage', garbage) + costOf('uranium', uranium) })
      ]
    }).do(amounts => {
      const cards = player.allMy(Card);
      let cost = 0;
      for (const type of resourceTypes) {
        cost += costOf(type, amounts[type]);
        for (const resource of resources.firstN(amounts[type], Resource, {type})) {
          if (amounts[type]) resource.putInto(
            cards.find(card => card.spaceFor(type) > 0 && !card.resourcesAvailableToPower()) ||
              cards.find(card => card.spaceFor(type) > 0)!
          )
        }
      }
      player.elektro -= cost;
    })
  });

  game.defineFlow(
    () => {
      // setup board
      deck.shuffle();
      deck.topN(8, Card, card => card.cost <= 15).putInto(powerplants);

      let removals = 0;
      if (game.players.length === 4) removals = 1;
      if (game.players.length === 3) removals = 2;
      if (game.players.length === 2) removals = 1;
      deck.topN(removals, Card, card => card.cost <= 15).remove();

      removals = 0;
      if (game.players.length === 4) removals = 3;
      if (game.players.length === 3) removals = 6;
      if (game.players.length === 2) removals = 5;
      deck.topN(removals, Card, card => !!card.resourceType && card.cost > 15).remove();

      deck.top(Card, card => card.cost <= 15)!.putInto(deck);
      deck.first(Card, 'step-3')?.putInto(deck, {fromBottom: 0});

      // initial resources
      board.refillResources('coal', 24);
      board.refillResources('oil', 18);
      board.refillResources('garbage', 9);
      board.refillResources('uranium', 2);

      game.players.shuffle();
    },

    loop(
      whileLoop({
        while: () => board.zones.length < Math.min(5, Math.max(3, game.players.length)),
        do: playerActions({
          name: 'selectZone',
          player: game.players.host(),
          actions: ['selectZone']
        }),
      }),
      () => {
        board.startNewPhase('auction');
        board.sortPlayers('desc');
        board.turn += 1;
        board.roundOrder = [...game.players];
        for (const player of game.players) {
          player.havePassedAuctionPhase = false;
        }
        game.message("Round order:" + board.roundOrder.map(player => player.name).join(",")  );
        powerplants.first(Card)!.discount = true;
      },
      eachPlayer({
        name: 'auctionPlayer',
        startingPlayer: () => game.players[0],
        continueUntil: () => game.players.every(p => p.havePassedAuctionPhase),
        do: ifElse({
          name: 'mayAuction',
          if: ({ auctionPlayer }) => !auctionPlayer.havePassedAuctionPhase,
          do: playerActions({
            name: 'auction',
            actions: [
              {
                name: 'auction',
                do: [
                  ({ auctionPlayer }) => {
                    for (const player of game.players) player.passedThisAuction = player.havePassedAuctionPhase;
                    board.playerWithHighestBid = auctionPlayer;
                  },

                  eachPlayer({
                    name: 'biddingPlayer',
                    startingPlayer: ({ auctionPlayer }) => auctionPlayer,
                    continueUntil: () => board.lastBid !== undefined && game.players.filter(p => !p.passedThisAuction).length === 1,
                    do: ifElse({
                      if: ({ biddingPlayer }) => !biddingPlayer.passedThisAuction,
                      do: playerActions({ name: 'bid', actions: ['bid', 'passBid'] })
                    }),
                  }),

                  ifElse({
                    if: () => board.playerWithHighestBid!.allMy(Card).length >= 3,
                    do: playerActions({
                      player: () => board.playerWithHighestBid!,
                      name: 'scrap',
                      actions: ['scrap']
                    }),
                  }),

                  ({ auctionPlayer }) => {
                    const winner = board.playerWithHighestBid!;
                    game.message(`${winner} won the bid with ${board.lastBid}`);
                    board.playerWithHighestBid.turnFinished();
                    winner.elektro -= board.lastBid!;
                    board.lastBid = undefined;
                    powerplants.first(Card, {auction: true})!.putInto(board.first(PlayerMat, {player: winner})!);
                    deck.top(Card)?.putInto(powerplants);
                    winner.havePassedAuctionPhase = true;
                    if (winner !== auctionPlayer) Do.repeat();
                  },
                ],
              },
              'passAuction'
            ]
          })
        })
      }),

      () => {

        if (board.turn === 1) {
          board.sortPlayers('desc');
          board.roundOrder = [...game.players];
        }
        board.startNewPhase('resources');
        game.players.reverse();
        const discount = powerplants.first(Card, { discount: true });
        if (discount) {
          game.addDelay();
          discount.remove();
          deck.top(Card)?.putInto(powerplants);
        }

        if (powerplants.has('step-3')) { // because it was refilled at some point during phase 2
          game.message('Step 3 has begun!');
          board.step = 3;
          game.addDelay();
          powerplants.first(Card)?.remove();
          powerplants.first(Card, 'step-3')?.remove();
        }

        // unpower cities
        for (const building of map.all(Building, { powered: true })) building.powered = false;
      },

      eachPlayer({
        name: 'purchasePlayer',
        do: playerActions({
          name: 'purchaseResources',
          actions: [
            { name: 'buyResource', do: Do.repeat },
            'pass'
          ]
        }),
      }),

      () => { 
        board.startNewPhase('build');
      },

      eachPlayer({
        name: 'buildPlayer',
        do: playerActions({
          name: 'build',
          actions: [
            { name: 'build', do: Do.repeat },
            'pass'
          ]
        }),
      }),

      () => {
        board.startNewPhase('power');
        if (game.players.max('score') >= victory[game.players.length - 2]) {
          game.message("Final power phase!");
        }
      },

      eachPlayer({
        name: 'powerPlayer',
        do: [
          loop(playerActions({
            name: 'arrange',
            actions: [
              { name: 'arrangeResources', do: Do.repeat },
              { name: 'pass', do: Do.break }
            ]
          })),
          loop(playerActions({
            name: 'power',
            actions: [
              { name: 'power', do: Do.repeat },
              { name: 'pass', do: Do.break }
            ]
          })),
          ({ powerPlayer }) => {
            // count power from plants and number of cities that can be powered
            powerPlayer.cities = Math.min(
              powerPlayer.allMy(Building, { powered: true }).length,
              income.length - 1,
            )

            if (game.players.max('score') < victory[game.players.length - 2]) {
              const rev = income[powerPlayer.cities];
              powerPlayer.elektro += rev;
              game.message(`${powerPlayer} earned ${rev} elektro for ${powerPlayer.cities} ${powerPlayer.cities === 1 ? 'city' : 'cities'}`);
            }

            powerPlayer.cities = 0;
            // unpower plants
            for (const card of powerPlayer.allMy(Card, { powered: true })) {
              card.powered = false;
            }
          },
        ]
      }),
      () => {
        const step2Score = game.players.length < 6 ? 7 : 6;
        if (board.step === 1 && game.players.max('score') >= step2Score) {
          game.message('Step 2 has begun!');
          board.step = 2;
          game.addDelay();
          powerplants.first(Card)?.remove();
          board.first('deck')!.top(Card)?.putInto(powerplants);
        }
        if (game.players.max('score') >= victory[game.players.length - 2]) {
          const winner = game.players.withHighest('cities', 'elektro');
          game.message(`${winner} wins with ${winner.cities} cities!`)
          game.finish(winner);
        } else {
          for (const r of resourceTypes) {
            board.refillResources(r, refill[r][game.players.length - 1][board.step - 1]);
          }
          game.message('Resources have been resupplied');

          if (board.step === 3) {
            powerplants.first(Card)?.remove();
          } else {
            powerplants.last(Card)?.putInto(deck, {fromBottom: 0});
          }
          game.addDelay();
          deck.top(Card)?.putInto(powerplants);

          if (powerplants.has('step-3')) { // because it was just refilled
            game.message('Step 3 has begun!');
            board.step = 3;
            powerplants.first(Card)?.remove();
            powerplants.first(Card, 'step-3')?.remove();
          }
        }
      }
    )
  );
});
