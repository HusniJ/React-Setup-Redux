import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import VoteApp from './voteapp';
import VoteResults from './components/voteresults';
import myApp from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let store = createStore(myApp);

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