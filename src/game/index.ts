/**
 * TODO
 * 2-player rules add Trust...
 */

import {
  createGame,
  Player,
  Game,
  Space,
  ConnectedSpaceMap,
  Piece,
  Do,
  union,
} from '@boardzilla/core';

import { cards } from './cards.js';

export class PowergridPlayer extends Player<Powergrid, PowergridPlayer> {
  score: number = 0;
  elektro: number = 50;
  cities: number = 0;
  passedThisAuction: boolean = false;
  havePassedAuctionPhase: boolean = false;
};

type ResourceType = 'coal' | 'oil' | 'garbage' | 'uranium'
const resourceTypes: ResourceType[] = ['coal', 'oil', 'garbage', 'uranium'];

export class Powergrid extends Game<Powergrid, PowergridPlayer> {
  step: number = 1;
  phase: 'auction' | 'resources' | 'build' | 'power' = 'auction';
  turn: number = 0;
  zones: string[] = [];
  lastBid?: number;
  playerWithHighestBid?: PowergridPlayer;
  noMoreUranium = false;
  income = [10, 22, 33, 44, 54, 64, 73, 82, 90, 98, 105, 112, 118, 124, 129, 134, 138, 142, 145, 148, 150];

  step2Score() {
    return this.game.players.length < 6 ? 7 : 6;
  }

  victory() {
    return [18, 17, 17, 15, 14][this.game.players.length - 2];
  }

  refill(step: number, resource: ResourceType) {
    switch(resource) {
    case 'coal':
      return [
        [3, 4, 3],
        [3, 4, 3],
        [4, 5, 3],
        [5, 6, 4],
        [5, 7, 5],
        [7, 9, 6],
      ][this.game.players.length - 1][step - 1];
    case 'oil':
      return [
        [2, 2, 4],
        [2, 2, 4],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 6],
        [5, 6, 7],
      ][this.game.players.length - 1][step - 1];
    case 'garbage':
      return [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [2, 3, 4],
        [3, 3, 5],
        [3, 5, 6],
      ][this.game.players.length - 1][step - 1];
    case 'uranium':
      return [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 2, 2],
        [2, 3, 2],
        [2, 3, 3],
      ][this.game.players.length - 1][step - 1];
    }
  };


  sortPlayers(direction: 'asc' | 'desc') {
    this.game.players.sortBy([
      'score',
      player => player.allMy(Card).max('cost') || 0
    ], direction);
  }

  applyMinimumRule() {
    for (const card of $.powerplants.all(Card)) {
      if (card.cost <= this.game.players.max('score')) {
        this.game.message('{{card}} is below the minimum and is discarded', {card});
        this.game.addDelay();
        card.remove();
        $.deck.top(Card)?.putInto($.powerplants);
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

export class Card extends Piece<Powergrid> {
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

export class Resource extends Piece<Powergrid> {
  type: ResourceType;
}

export class ResourceSpace extends Space<Powergrid> {
  resource: ResourceType;
  cost: number;
}

export class City extends Space<Powergrid> {
  owners: PowergridPlayer[] = [];
  zone: string

  costToBuild() {
    const closestCity = this.game.first(ConnectedSpaceMap)!.closestTo(this, City, city => city.has(Building, {mine: true}));
    return [10, 15, 20][this.owners.length] + (closestCity ? this.distanceTo(closestCity)! : 0);
  }

  canBuild() {
    return this.game.zones.includes(this.zone) &&
      !this.has(Building, {mine: true}) &&
      this.owners.length < this.game.step;
  }

  canBuildFor(elektro: number) {
    return this.canBuild() && elektro >= this.costToBuild();
  }
}

export class PlayerMat extends Space<Powergrid> {
  player: PowergridPlayer
}

export class Building extends Piece<Powergrid> {
  powered?: boolean = false;
}

export default createGame(PowergridPlayer, Powergrid, game => {

  const { action } = game;
  const {
    playerActions,
    ifElse,
    loop,
    whileLoop,
    eachPlayer,
  } = game.flowCommands;

  const map = game.create(ConnectedSpaceMap, 'germany');

  const cuxhaven = map.create(City, 'Cuxhaven', {zone: 'green'});
  const bremen = map.create(City, 'Bremen', {zone: 'green'})
  const hannover = map.create(City, 'Hannover', {zone: 'green'});
  const hamburg = map.create(City, 'Hamburg', {zone: 'green'});
  const kiel = map.create(City, 'Kiel', {zone: 'green'})
  const flensburg = map.create(City, 'Flensburg', {zone: 'green'})
  const wilhelmshaven = map.create(City, 'Wilhelmshaven', {zone: 'green'})

  map.connect(bremen, cuxhaven, 8);
  map.connect(hannover, bremen, 10);
  map.connect(hamburg, cuxhaven, 11);
  map.connect(hamburg, bremen, 11);
  map.connect(hamburg, hannover, 17);
  map.connect(kiel, hamburg, 8)
  map.connect(flensburg, kiel, 4)
  map.connect(wilhelmshaven, bremen, 11)

  const osnabruck = map.create(City, 'Osnabruck', {zone: 'red'})
  const munster = map.create(City, 'Münster', {zone: 'red'})
  const essen = map.create(City, 'Essen', {zone: 'red'})
  const duisberg = map.create(City, 'Duisberg', {zone: 'red'})
  const dusseldorf = map.create(City, 'Dusseldorf', {zone: 'red'})
  const dortmund = map.create(City, 'Dortmund', {zone: 'red'})
  const kassel = map.create(City, 'Kassel', {zone: 'red'})

  map.connect(osnabruck, wilhelmshaven, 14)
  map.connect(osnabruck, bremen, 11)
  map.connect(osnabruck, hannover, 16)
  map.connect(munster, osnabruck, 7)
  map.connect(essen, munster, 6)
  map.connect(duisberg, essen, 0)
  map.connect(dusseldorf, essen, 2)
  map.connect(dortmund, essen, 4)
  map.connect(dortmund, munster, 2)
  map.connect(kassel, hannover, 15)
  map.connect(kassel, osnabruck, 20)
  map.connect(kassel, dortmund, 18)

  const lubeck = map.create(City, 'Lübeck', {zone: 'brown'})
  const schwerin = map.create(City, 'Schwerin', {zone: 'brown'})
  const rostock = map.create(City, 'Rostock', {zone: 'brown'})
  const torgelow = map.create(City, 'Torgelow', {zone: 'brown'})
  const berlin = map.create(City, 'Berlin', {zone: 'brown'})
  const magdeburg = map.create(City, 'Magdeburg', {zone: 'brown'})
  const frankfurto = map.create(City, 'Frankfurt-O', {zone: 'brown'})

  map.connect(lubeck, kiel, 4)
  map.connect(lubeck, hamburg, 6)
  map.connect(schwerin, lubeck, 6)
  map.connect(schwerin, hamburg, 8)
  map.connect(schwerin, hannover, 19)
  map.connect(rostock, schwerin, 6)
  map.connect(torgelow, rostock, 19)
  map.connect(torgelow, schwerin, 19)
  map.connect(berlin, schwerin, 18)
  map.connect(berlin, torgelow, 15)
  map.connect(magdeburg, schwerin, 16)
  map.connect(magdeburg, hannover, 15)
  map.connect(magdeburg, berlin, 10)
  map.connect(frankfurto, berlin, 6)

  const halle = map.create(City, 'Halle', {zone: 'yellow'})
  const leipzig = map.create(City, 'Leipzig', {zone: 'yellow'})
  const dresden = map.create(City, 'Dresden', {zone: 'yellow'})
  const erfurt = map.create(City, 'Erfurt', {zone: 'yellow'})
  const fulda = map.create(City, 'Fulda', {zone: 'yellow'})
  const wurzburg = map.create(City, 'Wurzburg', {zone: 'yellow'})
  const nurnberg = map.create(City, 'Nurnberg', {zone: 'yellow'})

  map.connect(halle, magdeburg, 11)
  map.connect(halle, berlin, 17)
  map.connect(leipzig, halle, 0)
  map.connect(leipzig, frankfurto, 21)
  map.connect(dresden, leipzig, 13)
  map.connect(dresden, frankfurto, 16)
  map.connect(erfurt, halle, 6)
  map.connect(erfurt, hannover, 19)
  map.connect(erfurt, kassel, 15)
  map.connect(erfurt, dresden, 19)
  map.connect(fulda, kassel, 8)
  map.connect(fulda, erfurt, 13)
  map.connect(wurzburg, fulda, 11)
  map.connect(nurnberg, wurzburg, 8)
  map.connect(nurnberg, erfurt, 21)

  const koln = map.create(City, 'Koln', {zone: 'blue'})
  const aachen = map.create(City, 'Aachen', {zone: 'blue'})
  const trier = map.create(City, 'Trier', {zone: 'blue'})
  const wiesbaden = map.create(City, 'Wiesbaden', {zone: 'blue'})
  const frankfurtm = map.create(City, 'Frankfurt-M', {zone: 'blue'})
  const saarbrucken = map.create(City, 'Saarbrucken', {zone: 'blue'})
  const mannheim = map.create(City, 'Mannheim', {zone: 'blue'})

  map.connect(koln, dusseldorf, 4)
  map.connect(koln, dortmund, 10)
  map.connect(aachen, dusseldorf, 9)
  map.connect(aachen, koln, 7)
  map.connect(trier, aachen, 19)
  map.connect(trier, koln, 20)
  map.connect(wiesbaden, koln, 21)
  map.connect(wiesbaden, trier, 18)
  map.connect(frankfurtm, dortmund, 20)
  map.connect(frankfurtm, kassel, 13)
  map.connect(frankfurtm, fulda, 8)
  map.connect(frankfurtm, wiesbaden, 0)
  map.connect(frankfurtm, wurzburg, 13)
  map.connect(saarbrucken, trier, 11)
  map.connect(saarbrucken, wiesbaden, 10)
  map.connect(mannheim, wiesbaden, 11)
  map.connect(mannheim, saarbrucken, 11)
  map.connect(mannheim, wurzburg, 10)

  const stuttgart = map.create(City, 'Stuttgart', {zone: 'purple'})
  const freiburg = map.create(City, 'Freiburg', {zone: 'purple'})
  const konstanz = map.create(City, 'Konstanz', {zone: 'purple'})
  const augsburg = map.create(City, 'Augsburg', {zone: 'purple'})
  const regensburg = map.create(City, 'Regensburg', {zone: 'purple'})
  const munchen = map.create(City, 'Munchen', {zone: 'purple'})
  const passau = map.create(City, 'Passau', {zone: 'purple'})

  map.connect(stuttgart, saarbrucken, 17)
  map.connect(stuttgart, mannheim, 6)
  map.connect(stuttgart, wurzburg, 12)
  map.connect(freiburg, stuttgart, 16)
  map.connect(konstanz, freiburg, 14)
  map.connect(konstanz, stuttgart, 16)
  map.connect(augsburg, stuttgart, 15)
  map.connect(augsburg, konstanz, 17)
  map.connect(augsburg, wurzburg, 19)
  map.connect(augsburg, nurnberg, 18)
  map.connect(regensburg, nurnberg, 12)
  map.connect(regensburg, augsburg, 13)
  map.connect(munchen, augsburg, 6)
  map.connect(munchen, regensburg, 10)
  map.connect(passau, regensburg, 12)
  map.connect(passau, munchen, 14)

  const resources = game.create(Space, 'resources');
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

  const powerplants = game.create(Space, 'powerplants');
  powerplants.onEnter(Card, c => {
    c.showToAll();
    game.applyMinimumRule();
    powerplants.sortBy('cost');
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

  const deck = game.create(Space, 'deck');
  deck.setOrder('stacking');
  deck.onEnter(Card, c => c.hideFromAll());

  for (const [name, attrs] of Object.entries(cards)) deck.create(Card, name, attrs);
  game.pile.createMany(24, Resource, 'coal', { type: 'coal' });
  game.pile.createMany(24, Resource, 'oil', { type: 'oil' });
  game.pile.createMany(24, Resource, 'garbage', { type: 'garbage' });
  game.pile.createMany(12, Resource, 'uranium', { type: 'uranium' });

  for (const player of game.players) {
    const mat = game.create(PlayerMat, 'player-mat', { player });
    mat.createMany(22, Building, 'building', { player });
    mat.onEnter(Card, c => {
      c.auction = false
      c.discount = false
      if (c.name === 'nuclear-39' && map.name === 'germany') {
        game.message('Uranium is now no longer available');
        game.noMoreUranium = true
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
      description: 'choosing playing zones',
    }).chooseOnBoard(
      'city', () => game.all(City, city => game.zones.length === 0 || (!game.zones.includes(city.zone) && game.all(City, c => (
        !game.zones.includes(c.zone) &&
          c.adjacencies(City, z => game.zones.includes(z.zone)).length > 0
      )).map(c => c.zone).includes(city.zone)))
    ).do(
      ({ city }) => { game.zones.push(city.zone) }
    ),

    auction: () => action({
      prompt: 'Choose a factory for auction',
      description: 'choosing a factory for auction',
      condition: !game.has(Card, {auction: true}),
    }).chooseOnBoard(
      'card', powerplants.firstN(game.step === 3 ? 8 : 4, Card)
    ).do(
      ({ card }) => { card.auction = true }
    ).message(
      `{{player}} put {{card}} up for auction`
    ),

    bid: player => action({
      description: 'bidding',
      condition: !player.passedThisAuction
    }).chooseNumber('bid', {
      min: game.lastBid ? game.lastBid + 1 : game.first(Card, {auction: true})?.purchaseCost(),
      max: player.elektro,
      confirm: 'Place bid'
    }).do(({ bid }) => {
      game.lastBid = bid;
      game.playerWithHighestBid = player;
    }).message(
      `{{player}} bid {{bid}} on {{plant}}`, {plant: game.first(Card, {auction: true})!}
    ),

    passAuction: player => action({
      prompt: 'Pass this auction',
      condition: game.turn > 1
    }).do(() => {
      player.havePassedAuctionPhase = true
    }).message(
      `{{player}} passes the auction round`
    ),

    passBid: player => action({
      prompt: 'Pass',
      condition: game.lastBid !== undefined
    }).do(() => {
      player.passedThisAuction = true
    }).message(
      `{{player}} passes`
    ),

    scrap: player => action({
      prompt: 'You must scrap one of your powerplants',
      description: 'scrapping a powerplant',
    }).chooseOnBoard(
      'card', player.allMy(Card)
    ).do(({ card }) => {
      // place each resource onto any other of players' cards that has room for it, including the auctioned card
      for (const resource of card.all(Resource)) {
        let other = union(game.all(Card, {mine: true}), powerplants.first(Card, {auction: true}))
          .first(Card, other => other !== card && other.spaceFor(resource.type) > 0);
        if (other) resource.putInto(other);
      }
      card.remove();
    }).message(
      `{{player}} scraps their {{card}}`
    ),

    pass: () => action({ prompt: 'Done' }),

    build: player => action({
      prompt: 'Select cities for building',
      description: 'selecting cities for building'
    }).chooseOnBoard(
      'city', map.all(City, city => city.canBuildFor(player.elektro)),
      {
        confirm: [
          `Build {{city}} for {{cost}} Elektro`,
          ({ city }) => ({ cost: city.costToBuild() })
        ]
      }
    ).do(({ city }) => {
      game.first(PlayerMat, { player })!.first(Building)!.putInto(city);
      player.elektro -= city.costToBuild();
      city.owners.push(player);
      player.score = map.all(Building, {mine: true}).length;
      game.applyMinimumRule();
    }).message(
      '{{player}} built a city in {{city}}'
    ),

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
      description: 'powering plants',
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
      prompt: 'Buy resources',
      description: 'buying resources'
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
      game.refillResources('coal', 24);
      game.refillResources('oil', 18);
      game.refillResources('garbage', 9);
      game.refillResources('uranium', 2);

      game.players.shuffle();
    },

    loop(
      whileLoop({
        while: () => game.zones.length < Math.min(5, Math.max(3, game.players.length)),
        do: playerActions({
          name: 'selectZone',
          player: game.players.host(),
          actions: ['selectZone']
        }),
      }),
      () => {
        game.sortPlayers('desc');
        game.phase = 'auction';
        game.turn += 1;
        for (const player of game.players) player.havePassedAuctionPhase = false;
        const discount = powerplants.first(Card);
        if (discount) discount.discount = true;
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
                    game.playerWithHighestBid = auctionPlayer;
                  },

                  eachPlayer({
                    name: 'biddingPlayer',
                    startingPlayer: ({ auctionPlayer }) => auctionPlayer,
                    nextPlayer: player => game.players.seatedNext(player),
                    continueUntil: () => game.lastBid !== undefined && game.players.filter(p => !p.passedThisAuction).length === 1,
                    do: ifElse({
                      if: ({ biddingPlayer }) => !biddingPlayer.passedThisAuction,
                      do: playerActions({ name: 'bid', actions: ['bid', 'passBid'] })
                    }),
                  }),

                  ifElse({
                    if: () => game.playerWithHighestBid!.allMy(Card).length >= 3,
                    do: playerActions({
                      player: () => game.playerWithHighestBid!,
                      name: 'scrap',
                      actions: ['scrap']
                    }),
                  }),

                  ({ auctionPlayer }) => {
                    const winner = game.playerWithHighestBid!;
                    game.message(`${winner} won the bid with ${game.lastBid}`);
                    winner.elektro -= game.lastBid!;
                    game.lastBid = undefined;
                    powerplants.first(Card, {auction: true})!.putInto(game.first(PlayerMat, {player: winner})!);
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
        if (game.turn === 1) game.sortPlayers('desc'); // resort only for first turn
        game.players.reverse();
        game.phase = 'resources';
        const discount = powerplants.first(Card, { discount: true });
        if (discount) {
          game.addDelay();
          discount.remove();
          deck.top(Card)?.putInto(powerplants);
        }

        if (powerplants.has('step-3')) { // because it was refilled at some point during phase 2
          game.message('Step 3 has begun!');
          game.step = 3;
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
          optional: 'Done',
          actions: [
            { name: 'buyResource', do: Do.repeat },
          ]
        }),
      }),

      () => { game.phase = 'build' },

      eachPlayer({
        name: 'buildPlayer',
        do: playerActions({
          name: 'build',
          optional: 'Done',
          actions: [
            { name: 'build', do: Do.repeat },
          ]
        }),
      }),

      () => {
        game.phase = 'power';
        if (game.players.max('score') >= game.victory()) {
          game.message("Final power phase!");
        }
      },

      eachPlayer({
        name: 'powerPlayer',
        do: [
          loop(playerActions({
            name: 'arrange',
            actions: [
              'arrangeResources',
              { name: 'pass', do: Do.break }
            ]
          })),
          loop(playerActions({
            name: 'power',
            actions: [
              'power',
              { name: 'pass', do: Do.break }
            ]
          })),
          ({ powerPlayer }) => {
            // count power from plants and number of cities that can be powered
            powerPlayer.cities = Math.min(
              powerPlayer.allMy(Building, { powered: true }).length,
              game.income.length - 1,
            )

            if (game.players.max('score') < game.victory()) {
              const rev = game.income[powerPlayer.cities];
              powerPlayer.elektro += rev;
              game.message(`${powerPlayer} earned ${rev} elektro for ${powerPlayer.cities} ${powerPlayer.cities === 1 ? 'city' : 'cities'}`);

              powerPlayer.cities = 0;
              // unpower plants
              for (const card of powerPlayer.allMy(Card, { powered: true })) {
                card.powered = false;
              }
            }
          },
        ]
      }),
      () => {
        if (game.step === 1 && game.players.max('score') >= game.step2Score()) {
          game.message('Step 2 has begun!');
          game.step = 2;
          game.addDelay();
          powerplants.first(Card)?.remove();
          game.first('deck')!.top(Card)?.putInto(powerplants);
        }
        if (game.players.max('score') >= game.victory()) {
          const winner = game.players.withHighest('cities', 'elektro');
          game.message(`${winner} wins with ${winner.cities} powered cities!`)
          game.finish(winner);
        } else {
          for (const r of resourceTypes) {
            game.refillResources(r, game.refill(game.step, r));
          }
          game.message('Resources have been resupplied');

          if (game.step === 3) {
            powerplants.first(Card)?.remove();
          } else {
            powerplants.last(Card)?.putInto(deck, {fromBottom: 0});
          }
          game.addDelay();
          deck.top(Card)?.putInto(powerplants);

          if (powerplants.has('step-3')) { // because it was just refilled
            game.message('Step 3 has begun!');
            game.step = 3;
            powerplants.first(Card)?.remove();
            powerplants.first(Card, 'step-3')?.remove();
          }
        }
      }
    )
  );
});
