import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {playersReducer as reducer} from './reducers/playersReducer';

const store  = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
    </div>
    </Provider>
  );
}

export default App;
