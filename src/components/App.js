import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Technologies from './Technologies';
import Random from './Random';
import '../components/App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [
        {
          name: 'Bruce Lee',
          profession: 'Martial Artist',
          age: 32,
        },
        {
          name: 'Stevie Ray Vaughan',
          profession: 'Blues Guitarist',
          age: 35
        },
        {
          name: 'Brian Regan',
          profession: 'Comedian',
          age: 61
        }
      ]
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
              users={this.state.users}
            />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
