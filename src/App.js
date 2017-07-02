import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import GithubHome from './Components/Github/GithubHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/login" component={ Login } /> */}
            <Route path='/' render={
              () => {
                return (
                  <div>
                    <Sidebar />
                    <div className="AppBodyContainer">
                      <Route exact={true} path="/" component={ Home } />
                      <Route path="/profile" component={ Profile } />
                      <Route path="/github" component={ GithubHome } />
                    </div>
                  </div>
                )
              }
            }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
