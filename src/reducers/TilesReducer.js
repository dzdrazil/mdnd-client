import {List} from 'immutable';

import {createReducer} from '../utils/reduxUtils';
import {EVENTS} from '../actions/TilesActions';
import {Floor} from '../domain/Tiles';

function getRootedSize(size) {
  return Math.pow(
    Math.round(Math.sqrt(size)),
    2
  );
}

function generateTiles(size) {
  let startingTiles = [];
  let rootedSize = getRootedSize(size);

  for (let i = 0; i < rootedSize; i++) {
    startingTiles.push(new Floor({id: i}));
  }

  return new List(startingTiles);
}

const INITIAL_STATE = generateTiles(400);

export default createReducer(INITIAL_STATE, {
  [EVENTS.EDIT_TILE](list, action) {
    // get the tile by its ID, update the tile with the new value,
    // and return the updated list
    let index = list.findIndex(tile => tile.get('id') === action.id);
    let tile = list.get(index);

    // don't bother updating if replacing floor with floor
    if (tile instanceof action.TileType && action.TileType === Floor) {
      return list;
    }

    // if it's the same tile type, replace it with floor
    if (tile instanceof action.TileType) {
      return list.update(
        index,
        x => new Floor({id: x.id})
      );
    }

    // tiles mismatch, replace with the new tile type
    return list.update(
      index,
      x => new action.TileType({id: x.id})
    );
  },

  [EVENTS.CHANGE_GRID_SIZE](list, action) {
    if (getRootedSize(action.size) === list.size) {
      return list;
    }

    return generateTiles(action.size);
  }
});
