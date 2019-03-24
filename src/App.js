import React, { Component } from 'react';

import './App.css';

import Deck from './Deck';
import Hand from './Hand';

class App extends Component {

  constructor(props) {
    super(props);

    const deck = new Deck();
    this.state = {
      deck,
      hand: deck.getHand()
    };
  }

  render() {
    return (
      <>
        <button onClick={this.onDeal}>Deal a new hand</button>
        <Hand cards={this.state.hand}/>
      </>
    );
  }

  onDeal = () => {
    this.setState((state) => ({
      hand: state.deck.getHand()
    }));
  }

}

export default App;
