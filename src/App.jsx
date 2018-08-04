import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './Badge';
import Utils from './Utils';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      badge: {}
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  componentDidMount() {}

  updateBadgeColor() {
    this.setState({
      badgeStyle: Utils.getBagdeColor()
    });
  }

  handleClick() {
    this.updateBadgeColor();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <button onClick={this.handleClick}>
          Change color
        </button>
        <Badge style={this.state.badgeStyle} title="toto" icon="fa fa-times"/>
      </div>
    );
  }
}

export default App;
