import {combineReducers, createStore} from 'redux';
import tiles from './TilesReducer';
import tilesEditor from './TileEditorReducer';

export const reducers = combineReducers({
  tiles,
  tilesEditor
});

export const store = createStore(reducers);
