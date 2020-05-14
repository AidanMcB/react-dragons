import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  render() {
    return (
      <div>
        <Home />
        <War />
        <DragonForm />
      </div>
    );
  }
}

export default App;
