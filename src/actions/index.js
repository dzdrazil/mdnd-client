import {bindActionCreators} from 'redux';

import * as TileActions from './TilesActions';

let actions = {
  ...TileActions
};

export default function getActions(dispatch) {
  return bindActionCreators(actions, dispatch);
}
