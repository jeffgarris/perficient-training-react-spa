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
      count: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
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
