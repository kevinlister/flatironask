import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <nav className="main-menu">

          <ul>
            <li>
              <Link to={`/`}>
                <i className="lab icon rainbow-animation nav-icon fa-2x"></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>

            <li className="has-subnav">
              <Link to={`/profile`}>
                <i className="user icon nav-icon fa-2x"></i>
                <span className="nav-text">Profile</span>
              </Link>
            </li>

            <li className="has-subnav">
              <Link to={`/github`}>
               <i className="github icon nav-icon fa-2x"></i>
                <span className="nav-text">Github</span>
              </Link>
            </li>

          </ul>

          <ul className="logout">
            <li>
              <a href="/">
                <i className="power icon nav-icon fa-2x"></i>
                <span className="nav-text">Logout</span>
              </a>
            </li>
          </ul>

        </nav>
      </div>
    );
  }
}

export default Sidebar;
