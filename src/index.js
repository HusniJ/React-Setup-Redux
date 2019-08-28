import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import VoteApp from './voteapp';
import VoteResults from './components/voteresults';
import myApp from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let store = createStore(myApp, /* preloadedState, */ devToolsEnhancer());

function render () {
  ReactDOM.render(
    <div className="container">
      <VoteApp store={store} />
      <hr/>
      <VoteResults store={store} />
    </div>
    ,
    document.getElementById('app')
  );
}

store.subscribe(render);

render();