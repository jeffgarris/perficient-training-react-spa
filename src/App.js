import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Technologies from './Technologies';
import Random from './Random';
import './sass/Global.scss';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marvelData: null,
      count: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    fetch('https://gateway.marvel.com/v1/public/characters?name=hulk&apikey=c742ff52fd52d3bc6f31c469c69ea4b4')
      .then(response => response.json())
      .then(data => this.setState({ marvelData: data }));

    console.log(this.state.marvelData);
  }

  handleDecrement() {
    if (this.state.count > 0) {
      this.setState(state => ({
        count: this.state.count - 1
      }));
    }
  }

  handleIncrement() {
    this.setState(state => ({
      count: this.state.count + 1
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/technologies" component={Technologies} />
          <Route path="/random" render={(props) =>
            <Random
              count={this.state.count}
              onDecrement={this.handleDecrement}
              onIncrement={this.handleIncrement}
            />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
