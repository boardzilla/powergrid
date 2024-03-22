import React from 'react';

import {
  render,
  times,
  ProfileBadge,
  ConnectedSpaceMap,
} from '@boardzilla/core';

import {
  default as setup,
  Card,
  PlayerMat,
  City,
  Building,
  ResourceSpace,
  Resource,
} from '../game/index.js';

import './style.scss';
import '@boardzilla/core/index.css';

import ElektroSVG from './components/elektro-svg.js';
import LightningSVG from './components/lightning-svg.js';
import gavel from './assets/gavel.svg';
import germany from './assets/germany2.svg';
import CitySVG from './components/city-svg.js';
import BuildingSVG from './components/building-svg.js';
import buildingFill from './assets/building.svg';
import coal from './assets/coal.svg';
import oil from './assets/oil.svg';
import garbage from './assets/garbage.svg';
import uranium from './assets/uranium.svg';
import resourceBuying from './assets/resources.svg';
import BuildingOutline from './components/building-outline-svg.js';
import coalOutline from './assets/coal-outline.svg';
import oilOutline from './assets/oil-outline.svg';
import garbageOutline from './assets/garbage-outline.svg';
import uraniumOutline from './assets/uranium-outline.svg';
import hybridOutline from './assets/hybrid-outline.svg';
import arrow from './assets/arrow.svg';
import powerplantOil from './assets/powerplant-oil.svg';
import powerplantCoal from './assets/powerplant-coal.svg';
import powerplantUranium from './assets/powerplant-uranium.svg';
import powerplantClean from './assets/powerplant-clean.svg';
import powerplantGarbage from './assets/powerplant-garbage.svg';
import PowerLabelSVG from './components/power-label-svg.js';
import socket from './assets/socket.svg';

render(setup, {
  boardSizes: (_screenX, _screenY, mobile) => mobile ? {
    name: 'mobile',
    aspectRatio: 1 / 2
  } : {
    name: 'desktop',
    aspectRatio: 8 / 5,
  },

  layout: (game, _player, boardSize) => {
    const map = game.first(ConnectedSpaceMap)!;

    const resourceSvgs = {
      coal: coalOutline,
      oil: oilOutline,
      garbage: garbageOutline,
      uranium: uraniumOutline,
      hybrid: hybridOutline,
      clean: null
    }

    if (boardSize === 'desktop') {
      let area = { left: 2.4, top: -10, width: 45, height: 120 };
      const zones = game.zones.sort().join('-');
      if (zones === 'blue-purple-yellow') area = { left: 1, top: -30, width: 51, height: 136 };
      if (zones === 'blue-red-yellow') area = { left: 1, top: -18, width: 51, height: 136 };
      if (zones === 'brown-green-red') area = { left: 1, top: 0, width: 51, height: 136 };
      if (zones === 'blue-green-red') area = { left: 2.5, top: -14, width: 54, height: 144 };

      game.layout(map, { area });
      game.layout(game.all(PlayerMat, { mine: false }), {
        area: { left: 50, top: 0, width: 50, height: 20 },
      });
      game.layout($.powerplants, {
        area: { left: 50, top: 20, width: 40, height: 20 },
      });
      game.layout($.deck, {
        area: { left: 90, top: 20, width: 10, height: 20 },
      });
      game.layout($.resources, {
        area: { left: 50, top: 40, width: 50, height: 40 },
      });
      game.layout(game.all(PlayerMat, { mine: true }), {
        area: { left: 50, top: 80, width: 50, height: 20 },
      });

    } else {

      game.layout(map, {
        area: { left: 0, top: 9, width: 100, height: 76 }
      });
      game.layout(game.all(PlayerMat, { mine: false }), {
        area: { left: 0, top: 0, width: 100, height: 15 },
      });
      game.layout($.powerplants, {
        area: { left: 0, top: 15, width: 30, height: 8 },
      });
      game.layout($.deck, {
        area: { left: 90, top: 15, width: 10, height: 5 },
      });
      game.layout($.resources, {
        area: { left: 0, top: 78, width: 100, height: 7 },
      });
      game.layout(game.all(PlayerMat, { mine: true }), {
        area: { left: 0, top: 85, width: 100, height: 15 },
      });
    }

    map.configureLayout({
      slots: [
        { top: 20, left: 28, width: 8, height: 8 },
        { top: 27, left: 31, width: 8, height: 8 },
        { top: 34, left: 43, width: 8, height: 8 },
        { top: 22, left: 41, width: 8, height: 8 },
        { top: 14.5, left: 40, width: 8, height: 8 },
        { top: 8, left: 35, width: 8, height: 8 },
        { top: 24, left: 18, width: 8, height: 8 },

        { top: 32, left: 24, width: 8, height: 8 },
        { top: 39.5, left: 22, width: 8, height: 8 },
        { top: 41, left: 11, width: 8, height: 8 },
        { top: 40, left: 4, width: 8, height: 8 },
        { top: 47, left: 6, width: 8, height: 8 },
        { top: 47, left: 24, width: 8, height: 8 },
        { top: 44.5, left: 36, width: 8, height: 8 },

        { top: 17, left: 51, width: 8, height: 8 },
        { top: 23, left: 58, width: 8, height: 8 },
        { top: 16, left: 63, width: 8, height: 8 },
        { top: 23, left: 80, width: 8, height: 8 },
        { top: 33, left: 76, width: 8, height: 8 },
        { top: 35.5, left: 60, width: 8, height: 8 },
        { top: 35, left: 87, width: 8, height: 8 },

        { top: 43, left: 63, width: 8, height: 8 },
        { top: 45, left: 70, width: 8, height: 8 },
        { top: 49, left: 85, width: 8, height: 8 },
        { top: 51.5, left: 57, width: 8, height: 8 },
        { top: 54, left: 44, width: 8, height: 8 },
        { top: 62, left: 45, width: 8, height: 8 },
        { top: 65, left: 57, width: 8, height: 8 },

        { top: 52.5, left: 13, width: 8, height: 8 },
        { top: 53.5, left: 2.5, width: 8, height: 8 },
        { top: 62, left: 6, width: 8, height: 8 },
        { top: 58, left: 22, width: 8, height: 8 },
        { top: 57, left: 28.4, width: 8, height: 8 },
        { top: 69, left: 14, width: 8, height: 8 },
        { top: 68, left: 27, width: 8, height: 8 },

        { top: 74, left: 31, width: 8, height: 8 },
        { top: 79, left: 20, width: 8, height: 8 },
        { top: 83, left: 31, width: 8, height: 8 },
        { top: 77, left: 47, width: 8, height: 8 },
        { top: 71, left: 63, width: 8, height: 8 },
        { top: 81, left: 60, width: 8, height: 8 },
        { top: 74, left: 78, width: 8, height: 8 },
      ]
    });
    game.all(City).layout(Building, {
      slots: [
        { top: 5, left: 30, width: 40, height: 40 },
        { top: 35, left: 5, width: 40, height: 40 },
        { top: 35, left: 55, width: 40, height: 40 },
      ]
    });

    if (boardSize === 'desktop') {
      $.powerplants.layout(Card, {
        direction: 'ltr',
        rows: 2,
        columns: 4,
        gap: 0.5,
        margin: { left: 18, right: 1, top: 1, bottom: 1 },
        alignment: 'left',
      });

      $.resources.layout(ResourceSpace, {
        gap: 0.5,
        margin: { left: 18, right: 1, top: 1, bottom: 1 },
        alignment: 'left',
        rows: 10,
        direction: 'ttb'
      });

    } else {

      $.powerplants.layout(Card, {
        direction: 'ltr',
        rows: 2,
        columns: 4,
        alignment: 'top right'
      });

      $.resources.layout($.resources.all(ResourceSpace, {resource: 'oil'}), {
        area: { left: 0, top: 0, width: 100, height: 25 },
        alignment: 'left',
        columns: 24,
        direction: 'ltr',
        gap: 0.5
      });

      $.resources.layout($.resources.all(ResourceSpace, {resource: 'coal'}), {
        area: { left: 0, top: 25, width: 100, height: 25 },
        alignment: 'left',
        columns: 24,
        direction: 'ltr',
        gap: 0.5
      });

      $.resources.layout($.resources.all(ResourceSpace, {resource: 'garbage'}), {
        area: { left: 0, top: 50, width: 100, height: 25 },
        alignment: 'left',
        columns: 24,
        direction: 'ltr',
        gap: 0.5
      });

      $.resources.layout($.resources.all(ResourceSpace, {resource: 'uranium'}), {
        area: { left: 0, top: 75, width: 100, height: 25 },
        alignment: 'left',
        columns: 24,
        direction: 'ltr',
        gap: 0.5
      });
    }

    game.all(PlayerMat).layout(Card, {
      area: { top: 10, left: 30, width: 65, height: 80 },
      gap: 0.5,
      columns: 3,
      direction: 'ltr'
    });

    $.deck.layout(Card, {
      direction: 'ltr',
      offsetColumn: { x: 10, y: 10 },
      alignment: 'top right',
      margin: 1,
      rows: 1,
      limit: 3
    });

    game.all(Card).layout(Resource, {
      area: { left: 10, top: 25, width: 80, height: 50 },
      gap: 0.5,
    });

    game.disableDefaultAppearance();

    game.appearance({
      render: () => (
        <>
          <div id="step-phase">
            Step {game.step}<br/>
            {game.phase === 'auction' && <img src={gavel}/>}
            {game.phase === 'resources' && <img src={resourceBuying}/>}
            {game.phase === 'build' && <img src={buildingFill}/>}
            {game.phase === 'power' && <img src={socket}/>}
            <div id="turn-markers">
              {game.game.players.map(p => <div key={p.position} className="turn-marker" style={{background: p.color}}/>)}
            </div>
          </div>
          <div id="sea"/>
          <div id="cover"/>
        </>
      )
    });

    game.all(PlayerMat).appearance({
      aspectRatio: 4,
      render: mat => (
        <>
          <ElektroSVG amount={mat.player.elektro}/>
          <LightningSVG amount={mat.player.score}/>
          <ProfileBadge player={mat.player}/>
        </>
      )
    });

    map.appearance({
      render: () => <img id="germany" src={germany}/>,
      connections: {
        thickness: .2,
        color: 'black',
        style: 'double',
        fill: 'white',
        label: PowerLabelSVG,
        labelScale: 0.045,
      }
    });

    game.all(ResourceSpace).appearance({
      render: s => <div className={'cost' + (s.isEmpty() ? ' empty' : '')}>{s.cost}</div>
    });

    game.all(Resource).appearance({ aspectRatio: 1 });
    game.all(Resource, {type: 'coal'}).appearance({ render: () => <img src={coal}/> });
    game.all(Resource, {type: 'oil'}).appearance({ render: () => <img src={oil}/> });
    game.all(Resource, {type: 'garbage'}).appearance({ render: () => <img src={garbage}/> });
    game.all(Resource, {type: 'uranium'}).appearance({ render: () => <img src={uranium}/> });

    game.all(City).appearance({
      aspectRatio: 1,
      render: city => (
        <div className={game.zones.includes(city.zone) ? '' : 'out-of-zone'}>
          {CitySVG(city)}
        </div>
      )
    });

    game.all(Building).appearance({
      aspectRatio: 1,
      render: BuildingSVG,
      effects: [{
        attributes: { powered: true },
        name: 'newly-powered',
      }]
    });
    game.all(PlayerMat).all(Building).appearance({ render: false });

    $.deck.appearance({
      render: deck => <div className="count">{deck.all(Card).length}</div>
    })

    $.powerplants.appearance({
      render: () => {
        if (game.phase === 'auction' && game.lastBid && game.playerWithHighestBid) return (
          <div style={{background: game.playerWithHighestBid.color}} className="bid">
            {game.playerWithHighestBid.name} high bid: {game.lastBid}
          </div>
        );
        return null;
      }
    })

    game.all(Card).appearance({
      aspectRatio: 1,
      info: card => card.isVisible() ? <p>Power {card.power} cit{card.power === 1 ? 'y' : 'ies'} for {card.resources ? card.resources + ' ' + card.resourceType : 'free'}</p> : false,
      render: card => (
        <div className={`outer ${card.resourcesAvailableToPower() && card.container(PlayerMat) ? 'powerable' : ''}`}>
          {card.isVisible() && (
            <>
              {card.resourceType === 'coal' && <img className="background" src={powerplantCoal}/>}
              {(card.resourceType === 'oil' || card.resourceType === 'hybrid') && <img className="background" src={powerplantOil}/>}
              {card.resourceType === 'garbage' && <img className="background" src={powerplantGarbage}/>}
              {card.resourceType === 'uranium' && <img className="background" src={powerplantUranium}/>}
              {card.resourceType === 'clean' && <img className="background" src={powerplantClean}/>}
              <div className="inner">
                {card.name === 'step-3' && <div className="step-3">PHASE 3</div>}
                {card.cost && card.name !== 'step-3' && (
                  <>
                    <div className="cost">
                      {card.discount ?
                        <span>
                          <span className="old-cost">{String(card.cost + 100).slice(-2)}</span>
                          <span className="new-cost"> 01</span>
                        </span>
                        :
                        String(card.cost + 100).slice(-2)
                      }
                    </div>
                    <div className={"production " + card.resourceType}>
                      {card.resourceType === 'hybrid' && <div className='hybrid2'/>}
                      {times(card.resources!, i => <img key={i} src={resourceSvgs[card.resourceType!]}/>)}
                      <img src={arrow}/>
                      <BuildingOutline number={card.power!}/>
                    </div>
                  </>
                )}
                {card.auction && <img src={gavel}/>}
              </div>
            </>
          )}
        </div>
      )
    });

    if (boardSize === 'desktop') {
      game.layoutStep('selectZone', {
        element: game,
        right: 51,
        top: 1,
      });

      game.layoutStep('auction', {
        element: $.powerplants,
        right: 60,
        top: 10,
        width: 35
      });

      game.layoutStep('bid', {
        element: $.powerplants,
        right: 60,
        top: 35,
        width: 35
      });

      game.layoutStep('purchaseResources', {
        element: $.resources,
        right: 66.6,
        top: 6,
      });

      game.layoutStep('build', {
        element: game,
        top: 2,
        left: 1.25,
      });

      game.layoutStep('arrange', {
        element: game.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

      game.layoutStep('power', {
        element: game.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

      game.layoutStep('scrap', {
        element: game.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

    } else {

      game.layoutStep('auction', {
        element: $.powerplants,
        left: 0,
        top: 100,
      });
    }
  },

  infoModals: [
    {
      title: 'Score threshholds',
      modal: game => (
        <table className="small">
          <tr>
            <th>Event</th><th>Score</th>
          </tr>
          <tr>
            <td>Step 2</td><td>{game.step2Score()}</td>
          </tr>
          <tr>
            <td>Last round</td><td>{game.victory()}</td>
          </tr>
        </table>
      )
    },

    {
      title: 'Income By Cities',
      modal: game => (
        <table className="split">
          <tr>
            <th>Cities</th><th>Income</th>
            <th>Cities</th><th>Income</th>
            <th>Cities</th><th>Income</th>
            <th>Cities</th><th>Income</th>
          </tr>
          {times(5, cities => (
            <tr key={cities}>
              <td>{cities}</td><td>{game.income[cities]}</td>
              <td>{cities + 5}</td><td>{game.income[cities + 5]}</td>
              <td>{cities + 10}</td><td>{game.income[cities + 10]}</td>
              <td>{cities + 15}</td><td>{game.income[cities + 15]}</td>
            </tr>
          ))}
        </table>
      )
    },

    {
      title: 'Resource refill amounts',
      modal: game => (
        <table>
          <tr>
            <th/><th>Coal</th><th>Oil</th><th>Garbage</th><th>Uranium</th>
          </tr>
          {times(3, step => (
            <tr>
              <td>Step {step}</td>
              <td>{game.refill(step, 'coal')}</td>
              <td>{game.refill(step, 'oil')}</td>
              <td>{game.refill(step, 'garbage')}</td>
              <td>{game.refill(step, 'uranium')}</td>
            </tr>
          ))}
        </table>
      )
    }
  ]
});
