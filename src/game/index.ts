/**
 * TODO
 * 2-player rules add Trust...
 */

import {
  createGame,
  createBoardClass,
  createBoardClasses,
  Player,
  playerActions,
  ifElse,
  whileLoop,
  eachPlayer,
  Do,
  union,
} from '@boardzilla/core';

import { cards } from './cards.js';

export class PowergridPlayer extends Player {
  score: number = 0;
  elektro: number = 50;
  cities: number = 0;
  passedThisAuction: boolean = false;
  havePassedAuctionPhase: boolean = false;
};

const Board = createBoardClass(PowergridPlayer);

type ResourceType = 'coal' | 'oil' | 'garbage' | 'uranium'
const resourceTypes: ResourceType[] = ['coal', 'oil', 'garbage', 'uranium'];

export class PowergridBoard extends Board {
  step: number = 1;
  phase: 'auction' | 'resources' | 'build' | 'power' = 'auction';
  turn: number = 0;
  zones: string[] = [];
  lastBid?: number;
  playerWithHighestBid?: PowergridPlayer;
  noMoreUranium = false;

  checkStepTriggers() {
    let advanceToStep2 = false;
    let advanceToStep3 = false;
    const powerplants = this.first('powerplants')!;
    const step2Score = this.players.length < 6 ? 7 : 6;
    if (this.step === 1 && this.players.max('score') >= step2Score) advanceToStep2 = true;
    if (powerplants.has('step-3')) advanceToStep3 = true;

    if (advanceToStep2) {
      this.message('Now in step 2');
      this.step = 2;
      powerplants.first(Card)?.remove();
      this.first('deck')!.top(Card)?.putInto(powerplants);
    }
    if (advanceToStep3) {
      this.message('Now in step 3');
      this.step = 3;
    }
  }

  sortPlayers(direction: 'asc' | 'desc') {
    this.players.sortBy([
      'score',
      player => this.first(PlayerMat, {player})!.all(Card).max('cost') || 0
    ], direction);
  }

  applyMinimumRule() {
    const powerplants = this.first('powerplants')!;
    for (const card of powerplants.all(Card)) {
      if (card.cost <= this.players.max('score')) {
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

const {Space, Piece} = createBoardClasses(PowergridBoard);

export {Space};

export class Card extends Piece {
  cost: number;
  resourceType?: ResourceType | 'hybrid' | 'clean';
  resources?: number;
  power?: number;
  auction?: boolean = false;
  discount?: boolean = false;
  powered?: boolean = false;

  purchaseCost = () => this.discount ? 1 : this.cost;

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

Card.hide('name', 'cost', 'resourceType', 'resources', 'power');

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
    return (this.board as PowergridBoard).zones.includes(this.zone) &&
      !this.has(Building, {mine: true}) &&
      this.owners.length < (this.board as PowergridBoard).step;
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

export default createGame(PowergridPlayer, PowergridBoard, [
  Card,
  Resource,
  ResourceSpace,
  City,
  Building,
  PlayerMat
], board => {
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
      powerplants.first(Card)!.remove();
      discount.discount = false;
      deck.top(Card)?.putInto(powerplants);
    }
  })

  const deck = board.create(Space, 'deck');
  deck.setOrder('stacking');
  deck.onEnter(Card, c => c.hideFromAll());

  for (const [name, attrs] of Object.entries(cards)) deck.create(Card, name, attrs);
  board.pile.createMany(24, Resource, 'coal', { type: 'coal' });
  board.pile.createMany(24, Resource, 'oil', { type: 'oil' });
  board.pile.createMany(24, Resource, 'garbage', { type: 'garbage' });
  board.pile.createMany(12, Resource, 'uranium', { type: 'uranium' });

  for (const player of board.players) {
    const mat = board.create(PlayerMat, 'player-mat', { player });
    mat.createMany(22, Building, 'building', { player });
    mat.onEnter(Card, c => {
      c.auction = false
      c.discount = false
      if (c.name === 'nuclear-39' && map.name === 'germany') board.noMoreUranium = true
    });
  };

  // setup board
  deck.shuffle();
  deck.topN(8, Card, card => card.cost <= 15).putInto(powerplants);

  let removals = 0;
  if (board.players.length === 4) removals = 1;
  if (board.players.length === 3) removals = 2;
  if (board.players.length === 2) removals = 1;
  deck.topN(removals, Card, card => card.cost <= 15).remove();

  removals = 0;
  if (board.players.length === 4) removals = 3;
  if (board.players.length === 3) removals = 6;
  if (board.players.length === 2) removals = 5;
  deck.topN(removals, Card, card => !!card.resourceType && card.cost > 15).remove();

  deck.top(Card, card => card.cost <= 15)!.putInto(deck);
  deck.first(Card, 'step-3')?.putInto(deck, {fromBottom: 0});

  // initial resources
  board.refillResources('coal', 24);
  board.refillResources('oil', 18);
  board.refillResources('garbage', 9);
  board.refillResources('uranium', 2);

  board.players.shuffle();

  const costOf = (resource: ResourceType, amount: number) => {
    if (amount > resources.all(resource).length) return Infinity;
    return resources.firstN(amount, resource).sum(resource => resource.container(ResourceSpace)!.cost)
  };

  const action = board.action;

  board.defineActions({
    selectZone: () => action({
      prompt: 'Choose playing zone',
    }).chooseOnBoard(
      'city', () => board.all(City, city => board.zones.length === 0 || board.all(City, c => (
        !board.zones.includes(c.zone) &&
          c.others(City, {adjacent: true}, z => board.zones.includes(z.zone)).length > 0
      )).map(c => c.zone).includes(city.zone))
    ).do(({ city }) => board.zones.push(city.zone)),

    auction: () => action({
      prompt: 'Choose a factory for auction',
      condition: !board.has(Card, {auction: true}),
    }).chooseOnBoard(
      'card', powerplants.firstN(board.step === 3 ? 8 : 4, Card)
    ).do(
      ({ card }) => card.auction = true
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
      `{{player}} bid {{bid}} on ${board.first(Card, {auction: true})}`
    ),

    passAuction: player => action({
      prompt: 'Pass this auction',
      condition: board.turn > 1
    }).do(
      () => player.havePassedAuctionPhase = true
    ),

    passBid: player => action({
      prompt: 'Pass',
      condition: board.lastBid !== undefined
    }).do(
      () => player.passedThisAuction = true
    ),

    scrap: player => action({
      prompt: 'You must scrap one of your powerplants',
    }).chooseOnBoard(
      'card', board.first(PlayerMat, { player })!.all(Card)
    ).do(({ card }) => {
      // place each resource onto any other of players' cards that has room for it, including the auctioned card
      for (const resource of card.all(Resource)) {
        let other = union(board.all(Card, {mine: true}), powerplants.first(Card, {auction: true}))
          .first(Card, other => other !== card && other.spaceFor(resource.type) > 0);
        if (other) resource.putInto(other);
      }
      card.remove();
    }),

    pass: () => action({ prompt: 'Done' }),

    build: player => action({
      prompt: 'Select cities for building'
    }).move(
      'building', board.first(PlayerMat, { player })!.first(Building)!,
      'city', map.all(City, city => city.canBuildFor(player.elektro)),
      {
        confirm: ({ city }) => `Build ${city.name} for ${city.costToBuild()} Elektro`
      }
    ).do(({ city }) => {
      player.elektro -= city.costToBuild();
      city.owners.push(player);
      player.score = map.all(Building, {mine: true}).length;
      board.checkStepTriggers();
      board.applyMinimumRule();
    }),

    arrangeResources: player => action({
      prompt: 'Arrange resources'
    }).move(
      'resource', board.first(PlayerMat, { player })!.all(Resource),
      'card', ({ resource }) => resource.container(Card)!.others(Card, card => card.spaceFor(resource.type) > 0),
      {
        promptInto: 'to where'
      }
    ),

    power: player => action({
      prompt: 'Power your plants',
      condition: map.has(Building, {player})
    }).chooseOnBoard(
      'card', board.all(Card, {mine: true}).filter(c => !c.powered && !!c.resourcesAvailableToPower()), {
        prompt: 'Select plant to power',
        skipIfOnlyOne: false,
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
      oil: ['number', {
        prompt: 'Buy Oil',
        min: 0,
        max: board.all(Card, {mine: true}).sum(card => card.spaceFor('oil'))
      }],
      coal: ['number', {
        prompt: 'Buy Coal',
        min: 0,
        max: board.all(Card, {mine: true}).sum(card => card.spaceFor('coal')),
      }],
      garbage: ['number', {
        prompt: 'Buy Garbage',
        min: 0,
        max: board.all(Card, {mine: true}).sum(card => card.spaceFor('garbage')),
      }],
      uranium: ['number', {
        prompt: 'Buy Uranium',
        min: 0,
        max: board.all(Card, {mine: true}).sum(card => card.spaceFor('uranium')),
      }],
    }, {
      validate: ({ oil, coal, garbage, uranium }) => (
        oil + coal + garbage + uranium > 0 &&
          costOf('oil', oil) + costOf('coal', coal) + costOf('garbage', garbage) + costOf('uranium', uranium) <= player.elektro
      ),
      confirm: ({ oil, coal, garbage, uranium }) => (
        `Pay ${costOf('oil', oil) + costOf('coal', coal) + costOf('garbage', garbage) + costOf('uranium', uranium)} Elektro`
      )
    }).do(({ oil, coal, garbage, uranium }) => {
      player.elektro -= costOf('oil', oil) + costOf('coal', coal) + costOf('garbage', garbage) + costOf('uranium', uranium);
      if (oil) for (const resource of resources.firstN(oil, Resource, {type: 'oil'})) {
        resource.putInto(board.all(Card, {mine: true}).find(card => card.spaceFor('oil') > 0)!)
      }
      if (coal) for (const resource of resources.firstN(coal, Resource, {type: 'coal'})) {
        resource.putInto(board.all(Card, {mine: true}).find(card => card.spaceFor('coal') > 0)!)
      }
      if (garbage) for (const resource of resources.firstN(garbage, Resource, {type: 'garbage'})) {
        resource.putInto(board.all(Card, {mine: true}).find(card => card.spaceFor('garbage') > 0)!)
      }
      if (uranium) for (const resource of resources.firstN(uranium, Resource, {type: 'uranium'})) {
        resource.putInto(board.all(Card, {mine: true}).find(card => card.spaceFor('uranium') > 0)!)
      }
    })

    // buyResource: action({
    //   prompt: 'Buy resources'
    // }).chooseFrom(
    //   'type',
    //   resourceTypes.filter(type => (
    //     costOf(type, 1) <= player.elektro && cards.find(card => card.spaceFor(type) > 0)
    //   ))
    // ).choose(
    //   'amount', 'number', {
    //     confirm: ({ type, amount }) => `Buy ${amount} ${type} for ${costOf(type, amount)} Elektro?`,
    //     validate: ({ type, amount }) => {
    //       if (amount > resources.all(Resource, {type}).length) return `Not enough ${type}`;
    //       if (costOf(type, amount) > player.elektro) return `Not enough Elektro`;
    //       if (amount > cards.sum(card => card.spaceFor(type))) return `Not enough space`;
    //     }
    //   }
    // ).do(({ type, amount, choice, choice2, amount2, pieces }) => {
    //   player.elektro -= costOf(type, amount);
    //   for (const resource of resources.firstN(amount, Resource, {type})) {
    //     resource.putInto(cards.first(Card, card => card.spaceFor(resource.type) > 0)!)
    //   }
    // })
  });

  board.defineFlow(() => {
    return whileLoop({
      while: true,
      do: [
        whileLoop({
          while: () => board.zones.length < Math.min(5, Math.max(3, board.players.length)),
          do: playerActions({
            name: 'selectZone',
            player: board.players.host(),
            actions: { selectZone: null }
          }),
        }),
        () => {
          board.players.sortBy('score', 'desc'); // and powerplants
          board.phase = 'auction';
          board.turn += 1;
          for (const player of board.players) player.havePassedAuctionPhase = false;
          powerplants.first(Card)!.discount = true;
        },
        eachPlayer({
          name: 'auctionPlayer',
          startingPlayer: () => board.players[0],
          continueUntil: () => board.players.every(p => p.havePassedAuctionPhase),
          do: ifElse({
            name: 'mayAuction',
            if: ({ auctionPlayer }) => !auctionPlayer.havePassedAuctionPhase,
            do: playerActions({
              name: 'auction',
              actions: {
                auction: [
                  ({ auctionPlayer }) => {
                    for (const player of board.players) player.passedThisAuction = player.havePassedAuctionPhase;
                    board.playerWithHighestBid = auctionPlayer;
                  },

                  eachPlayer({
                    name: 'biddingPlayer',
                    startingPlayer: ({ auctionPlayer }) => auctionPlayer,
                    continueUntil: () => board.lastBid !== undefined && board.players.filter(p => !p.passedThisAuction).length === 1,
                    do: ifElse({
                      if: ({ biddingPlayer }) => !biddingPlayer.passedThisAuction,
                      do: playerActions({ name: 'bid', actions: { bid: null, passBid: null } })
                    }),
                  }),

                  ifElse({
                    if: () => board.first(PlayerMat, { player: board.playerWithHighestBid! })!.all(Card).length >= 3,
                    do: playerActions({
                      player: () => board.playerWithHighestBid!,
                      name: 'scrap',
                      actions: { scrap: null }
                    }),
                  }),

                  ({ auctionPlayer }) => {
                    const winner = board.playerWithHighestBid!;
                    board.message(`${winner} won the bid with ${board.lastBid}`);
                    winner.elektro -= board.lastBid!;
                    board.lastBid = undefined;
                    powerplants.first(Card, {auction: true})!.putInto(board.first(PlayerMat, {player: winner})!);
                    deck.top(Card)?.putInto(powerplants);
                    winner.havePassedAuctionPhase = true;
                    if (winner !== auctionPlayer) return Do.repeat;
                  },
                ],
                passAuction: null
              }
            })
          })
        }),

        () => {
          board.players.sortBy('score', 'asc');
          board.phase = 'resources';
          const discount = powerplants.first(Card, { discount: true });
          if (discount) {
            discount.remove();
            deck.top(Card)?.putInto(powerplants);
          }
        },

        eachPlayer({
          name: 'purchasePlayer',
          do: playerActions({
            name: 'purchaseResources',
            actions: {
              buyResource: Do.repeat,
              pass: null
            }
          }),
        }),

        () => { board.phase = 'build' },

        eachPlayer({
          name: 'buildPlayer',
          do: playerActions({
            name: 'build',
            skipIfOnlyOne: true,
            actions: {
              build: Do.repeat,
              pass: null
            }
          }),
        }),

        () => {
          board.phase = 'power';
          if (board.players.max('score') >= victory[board.players.length - 2]) {
            board.message("Final power phase!");
          }
        },

        eachPlayer({
          name: 'powerPlayer',
          do: [
            whileLoop({
              while: true,
              do: playerActions({
                name: 'arrange',
                actions: {
                  arrangeResources: Do.repeat,
                  pass: Do.break
                }
              }),
            }),
            whileLoop({
              while: true,
              do: playerActions({
                name: 'power',
                actions: {
                  power: Do.repeat,
                  pass: Do.break
                }
              })
            }),
            ({ powerPlayer }) => {
              // count power from plants and number of cities that can be powered
              powerPlayer.cities = Math.min(
                map.all(Building, { mine: true, powered: true }).length,
                income.length - 1,
              )
              // unpower cities
              for (const building of map.all(Building, { mine: true, powered: true })) building.powered = false;

              if (board.players.max('score') < victory[board.players.length - 2]) {
                const rev = income[powerPlayer.cities];
                powerPlayer.elektro += rev;
                board.message(`${powerPlayer} earned ${rev} elektro for ${powerPlayer.cities} ${powerPlayer.cities === 1 ? 'city' : 'cities'}`);

                // unpower plants
                powerPlayer.cities = 0;
                for (const card of board.all(Card, { mine: true, powered: true })) {
                  card.powered = false;
                }
              }
            },
          ]
        }),
        () => {
          if (board.players.max('score') >= victory[board.players.length - 2]) {
            const winner = board.players.withHighest('cities', 'elektro');
            board.message(`${winner} wins with ${winner.cities} cities!`)
            board.finish(winner);
          } else {
            for (const r of resourceTypes) {
              board.refillResources(r, refill[r][board.players.length - 1][board.step - 1]);
            }
            if (board.step === 3) {
              powerplants.first(Card)?.remove();
            } else {
              powerplants.last(Card)?.putInto(deck, {fromBottom: 0});
            }
            deck.top(Card)?.putInto(powerplants);
          }
        }
      ]
    });
  });
});