import React from 'react';
import DOM from 'react-dom';
import { Provider } from 'react-redux';

import {store} from './reducers/index';
import getActions from './actions/index';

// Import non-js files like this, with the extension and an exclamation point:
import Board from './components/board/Board.jsx!';
import SideEditor from './components/sideEditor/SideEditor.jsx!';

let actions = getActions(store.dispatch);

DOM.render(
  <Provider store={store}>
    <div>
      <Board
        width={500} height={500}
        actions={actions} />
      <SideEditor actions={actions} />
    </div>
  </Provider>,
  document.getElementById('react-app')
);
