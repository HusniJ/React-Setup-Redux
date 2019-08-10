import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './voteapp.css';

export default class VoteApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>What is your favorite front-end framework in 2019?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-1 col-xs-2">
              <img src="images/angular_logo.png" height="96" alt="Angular" onClick={() => { this.store.dispatch(voteAngular()) }}></img>
            </div>
            <div className="col-xs-2">
              <img src="images/react_logo.png" height="96" alt="Angular" onClick={() => { this.store.dispatch(voteReact()) }}></img>
            </div>
            <div className="col-xs-2">
              <img src="images/vuejs_logo.png" height="96" alt="Angular" onClick={() => { this.store.dispatch(voteVuejs()) }}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}