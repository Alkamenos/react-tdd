import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react";
import {Button} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts:[],
    }
  }

  handleAdd = () =>{
    const gifts = [...this.state.gifts]
    gifts.push({id:gifts.length+1})
    this.setState({gifts})
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Button className={'btn-add'} onClick={this.handleAdd}>add</Button>
          </header>
        </div>
    );
  }

}

export default App;
