import Immutable, {List} from 'immutable';

import {createReducer} from '../utils/reduxUtils';
import {EVENTS} from '../actions/TilesActions';
import {Wall} from '../domain/Tiles';

const initialState = Immutable.fromJS({
  changeQueue: null,
  SelectedTileType: Wall
});

export default createReducer(initialState, {
  [EVENTS.START_CHANGE_QUEUE](state, action) {
    return state.set('changeQueue', new List([action.tile]));
  },

  [EVENTS.ADD_TO_CHANGE_QUEUE](state, action) {
    return state.update('changeQueue', cQ => cQ.push(action.tile));
  },

  [EVENTS.END_CHANGE_QUEUE](state) {
    return state.set('changeQueue', null);
  },

  [EVENTS.SET_TILE_TYPE](state, action) {
    return state.set('SelectedTileType', action.TileType);
  }
});
