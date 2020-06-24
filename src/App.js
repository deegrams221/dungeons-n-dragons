import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import ClassList from './Components/ClassList';
import ClassPage from './Components/ClassPage';
import classes from './classData';
import RaceList from './Components/RaceList';
import RacePage from './Components/RacePage';
import races from './raceData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      classes: classes
    };
  }

  render () {
    const {classes}=this.state;

    return (
      <div className="App">
        <div className="navbar">
          <p>
            <NavLink exact to="/" activeClassName="activeNavButton">HOME</NavLink>
          </p>
          <p>
            <NavLink to="/classes" activeClassName="activeNavButton">CLASSES</NavLink>
          </p>
          <p>
            <NavLink to="/races" activeClassName="activeNavButton">RACES</NavLink>
          </p>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/classes" render={props => <ClassList {...props} classes={classes} />} />
        <Route path="/classes/:id" render={props => <ClassPage {...props} classes={classes} />} />
        <Route exact path="/races" render={props => <RaceList {...props} races={races} />} />
        <Route path="/races/:id" render={props => <RacePage {...props} races={races} />} />
      </div>
    );
  }
}

export default App;
