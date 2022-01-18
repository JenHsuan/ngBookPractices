import React, { Component } from 'react';
import { Cockpit } from './Cockpit';
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverElements: [
        {type: 'server', name: 'test', content: 'just a test'}
      ]
    };

    this.onServerAdded = this.onServerAdded.bind(this);
    this.onBlueprintAdded = this.onBlueprintAdded.bind(this);
  }

  onServerAdded(serverData) {
    this.setState({
      serverElements: [
        ...this.state.serverElements,
        {
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        }
      ]
    })
  }

  onBlueprintAdded(blueprintData) {
    this.setState({
      serverElements: [
        ...this.state.serverElements,
        {
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        }
      ]
    })
  }

  render() {
    return (
      <div className="container">
        <Cockpit
          serverCreated={this.onServerAdded}
          bluePrintCreated={ this.onBlueprintAdded}/>
        <hr/>
      </div>
    )
  }
}

export default App
