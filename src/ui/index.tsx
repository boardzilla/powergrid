import React from 'react';

import {
  render,
  times,
  ProfileBadge,
} from '@boardzilla/core';

import {
  default as setup,
  Space,
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

  layout: (board, _player, boardSize) => {
    const map = board.first(Space)!;

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
      const zones = board.zones.sort().join('-');
      if (zones === 'blue-purple-yellow') area = { left: 1, top: -30, width: 51, height: 136 };
      if (zones === 'blue-red-yellow') area = { left: 1, top: -18, width: 51, height: 136 };
      if (zones === 'brown-green-red') area = { left: 1, top: 0, width: 51, height: 136 };
      if (zones === 'blue-green-red') area = { left: 2.5, top: -14, width: 54, height: 144 };

      board.layout(map, { area });
      board.layout(board.all(PlayerMat, { mine: false }), {
        area: { left: 50, top: 0, width: 50, height: 20 },
      });
      board.layout($.powerplants, {
        area: { left: 50, top: 20, width: 40, height: 20 },
      });
      board.layout($.deck, {
        area: { left: 90, top: 20, width: 10, height: 20 },
      });
      board.layout($.resources, {
        area: { left: 50, top: 40, width: 50, height: 40 },
      });
      board.layout(board.all(PlayerMat, { mine: true }), {
        area: { left: 50, top: 80, width: 50, height: 20 },
      });

    } else {

      board.layout(map, {
        area: { left: 0, top: 9, width: 100, height: 76 }
      });
      board.layout(board.all(PlayerMat, { mine: false }), {
        area: { left: 0, top: 0, width: 100, height: 15 },
      });
      board.layout($.powerplants, {
        area: { left: 0, top: 15, width: 30, height: 8 },
      });
      board.layout($.deck, {
        area: { left: 90, top: 15, width: 10, height: 5 },
      });
      board.layout($.resources, {
        area: { left: 0, top: 78, width: 100, height: 7 },
      });
      board.layout(board.all(PlayerMat, { mine: true }), {
        area: { left: 0, top: 85, width: 100, height: 15 },
      });
    }

    map.layout(City, {
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
    board.all(City).layout(Building, {
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

    board.all(PlayerMat).layout(Card, {
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

    board.all(Card).layout(Resource, {
      area: { left: 10, top: 25, width: 80, height: 50 },
      gap: 0.5,
    });

    board.disableDefaultAppearance();

    board.appearance({
      render: () => (
        <>
          <div id="step-phase">
            Step {board.step}<br/>
            {board.phase === 'auction' && <img src={gavel}/>}
            {board.phase === 'resources' && <img src={resourceBuying}/>}
            {board.phase === 'build' && <img src={buildingFill}/>}
            {board.phase === 'power' && <img src={socket}/>}
            <div id="turn-markers">
              {board.game.players.map(p => <div key={p.position} className="turn-marker" style={{background: p.color}}/>)}
            </div>
          </div>
          <div id="sea"/>
          <div id="cover"/>
        </>
      )
    });

    board.all(PlayerMat).appearance({
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

    board.all(ResourceSpace).appearance({
      render: s => <div className={'cost' + (s.isEmpty() ? ' empty' : '')}>{s.cost}</div>
    });

    board.all(Resource).appearance({ aspectRatio: 1 });
    board.all(Resource, {type: 'coal'}).appearance({ render: () => <img src={coal}/> });
    board.all(Resource, {type: 'oil'}).appearance({ render: () => <img src={oil}/> });
    board.all(Resource, {type: 'garbage'}).appearance({ render: () => <img src={garbage}/> });
    board.all(Resource, {type: 'uranium'}).appearance({ render: () => <img src={uranium}/> });

    board.all(City).appearance({
      aspectRatio: 1,
      render: city => (
        <div className={board.zones.includes(city.zone) ? '' : 'out-of-zone'}>
          {CitySVG(city)}
        </div>
      )
    });

    board.all(Building).appearance({
      aspectRatio: 1,
      render: BuildingSVG,
      effects: [{
        attributes: { powered: true },
        className: 'newly-powered',
      }]
    });
    board.all(PlayerMat).all(Building).appearance({ render: false });

    $.deck.appearance({
      render: deck => <div className="count">{deck.all(Card).length}</div>
    })

    $.powerplants.appearance({
      render: () => {
        if (board.phase === 'auction' && board.lastBid && board.playerWithHighestBid) return (
          <div style={{background: board.playerWithHighestBid.color}} className="bid">
            {board.playerWithHighestBid.name} high bid: {board.lastBid}
          </div>
        );
        return null;
      }
    })

    board.all(Card).appearance({
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
      board.layoutStep('selectZone', {
        element: board,
        right: 51,
        top: 1,
      });

      board.layoutStep('auction', {
        element: $.powerplants,
        right: 60,
        top: 10,
        width: 35
      });

      board.layoutStep('bid', {
        element: $.powerplants,
        right: 60,
        top: 35,
      });

      board.layoutStep('purchaseResources', {
        element: $.resources,
        right: 66.6,
        top: 6,
      });

      board.layoutStep('build', {
        element: board,
        top: 2,
        left: 1.25,
      });

      board.layoutStep('arrange', {
        element: board.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

      board.layoutStep('power', {
        element: board.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

      board.layoutStep('scrap', {
        element: board.first(PlayerMat, { mine: true })!,
        bottom: 100,
        left: 2,
      });

      board.layoutStep('out-of-turn', {
        element: board,
        top: 2,
        left: 1.4,
      });

    } else {

      board.layoutStep('auction', {
        element: $.powerplants,
        left: 0,
        top: 100,
      });
    }
  }
});
