import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react'
// import validateInput from './LoginValidation'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      f_name: '',
      username: '',
      class_number: '',
      email: '',
      password: '',
      isLoading: false
    }
  }

  onLogin = (event) => {
    event.preventDefault()
  }

  onRegister = (event) => {
    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { f_name, username, class_number, email, password, isLoading } = this.state
    return (
      <div className="Login">
        <div className="login-container">
          <div className="ui message">

            <h1 className="ui header rainbow-animation site_title">Welcome to Fl-ask</h1>
            <h6 className="login-message">
              We believe that seeing other peoples solutions is an important part of learning how to code.<br />
              When comparing your solution to others you can pick up best-practices and learn how you can improve your own code.
            </h6>

            <div className="ui secondary segment">
              <h4>--Demo currently NA--</h4>
              <Loader active inline='centered' />
            </div>

            <div className="login-form-div">
              <form className="ui form segment">

                <div className="two fields">
                  <div className="field">
                    <label>Username</label>
                    <input placeholder="Username" onChange={this.onChange} value={username} name="username" type="text"/>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input placeholder="password" onChange={this.onChange} value={password} name="password" type="password"/>
                  </div>
                </div>

                <div className="two fields">
                  <div className="field">
                    <label>Name</label>
                    <input placeholder="First Name" onChange={this.onChange} value={f_name} name="f_name" type="text"/>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input placeholder="Email" onChange={this.onChange} value={email} name="email" type="text"/>
                  </div>
                </div>

                <div className="field">
                  <label>Class Number</label>
                  <input placeholder="Class number/date - (ie: 042417)" onChange={this.onChange} value={class_number} name="class_number" type="text"/>
                </div>

                <div className="inline field">
                  <div className="ui checkbox">
                    <input name="terms" type="checkbox"/>
                    <label>I agree to the terms and conditions</label>
                  </div>
                </div>

                <div className="ui large buttons">
                  <button className="ui button blue submit" onClick={this.onLogin} disabled={isLoading} >Login</button>
                  <div className="or"></div>
                  <button className="ui button green register" onClick={this.onRegister} >Sign Up</button>
                </div> &nbsp;
                <div className="ui reset button">Reset</div>

              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
