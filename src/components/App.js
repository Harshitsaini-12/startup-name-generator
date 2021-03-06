import React, { Component } from 'react';
import { SearchBox } from './searchbox/searchbox';
import { StartupName } from './startup name/startupName';
import './App.css';


const name = require('@rstacruz/startup-name-generator')

class App extends Component {
  constructor() {
    super();

    this.state = {
      startupNames: [],
    }
  }


  handleSearchSubmit = (searchField) => {
    this.setState({ startupNames: name(searchField) });
  }


  render() {
    return (
      <div className="App">
        <h1>Startup Name Generator</h1>
        <SearchBox
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <div className="startup-names-container">
          {
            this.state.startupNames.map(startupName => {
              return <StartupName 
               data={startupName}
               key={startupName}
              />
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
