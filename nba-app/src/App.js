import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PlayersList from './components/PlayersList';
import Player from './components/Player';

import {playersReducer as reducer} from './reducers/playersReducer';

const store  = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PlayersList/>
      <Player/>
    </div>
    </Provider>
  );
}

export default App;
