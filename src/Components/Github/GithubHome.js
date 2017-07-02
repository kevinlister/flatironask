import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import SearchGithub from './SearchGithub'

class GithubHome extends Component {
  constructor() {
    super()

      this.state = {
        classNum: '',
        labName: '',
        fileName: '',
        trigger: false
      }
  }

  onChange = event => { this.setState ({ [event.target.name]: event.target.value }) }
  handleSubmit = () => { this.setState({ trigger: true }) }

  getRepos = () => {
    if (this.state.trigger === true) {
      return <SearchGithub classNum={this.state.classNum} labName={this.state.labName} fileName={this.state.fileName}/>
    }
  }
  
  render() {
    const { classNum, labName, fileName } = this.state
    return (
      <div className="GithubHome">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input icon='folder' onChange={this.onChange} value={labName} name="labName" iconPosition='left' label='Lab Name' placeholder='ie: "oo-my-pets-web"' />
            <Form.Input icon='github' onChange={this.onChange} value={classNum} name="classNum" iconPosition='left' label='Class Number' placeholder='ie: "042417"' />
            <Form.Input icon='file text' onChange={this.onChange} value={fileName} name="fileName" iconPosition='left' label='File Path' placeholder='ie: "lib/file.rb" (or) "/src/components/LoginForm.js"' />
          </Form.Group>
          <Button type='submit' basic color='green'>Submit</Button>
        </Form>

        {this.getRepos()}

      </div>
    );
  }
}

export default GithubHome;
