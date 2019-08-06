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
      heros: [
        {
          name: 'Bruce Lee',
          profession: 'Martial Artist',
          born: 'November 27, 1940',
          died: 'July 20, 1973',
          age: 32
        },
        {
          name: 'Stevie Ray Vaughan',
          profession: 'Blues Guitarist',
          born: 'October 3, 1954',
          died: 'August 27, 1990',
          age: 35
        },
        {
          name: 'Brian Regan',
          profession: 'Comedian',
          born: 'June 2, 1958',
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
              heros={this.state.heros}
            />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
