import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home page works
        <h1>Site page underconstruction</h1>
        <h3>Use the link below for now</h3>
        <Link to={`/github`}>
          <h3>Find Solutions</h3>
        </Link>

        <h2>Complete your lab before you look at the solutions. You'll only cheat your self if you copy.</h2>
        <h1>If you're stuck for a long time </h1>
        <h2 className="red">ASK SOMEONE!!!</h2>
      </div>
    )
  }
}

export default Home;
