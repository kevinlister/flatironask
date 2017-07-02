import React, { Component } from 'react'
import { Label, Segment } from 'semantic-ui-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

  class SearchGithub extends Component {
    constructor(props) {
      super(props)

      this.state = {
        users: [],
        solutions: []
      }
    }

    getAPI = () => {
      const ClientId = '?client_id=a4b731d06b9bdeec0c95'
      const ClientSecret= '&client_secret=dd803f2277961d3b393a024c87845b604cdc1bd8'
      const URL = `https://api.github.com/repos/learn-co-students/${this.props.labName}-${this.props.classNum}/pulls${ClientId}${ClientSecret}`
      fetch(URL)
        .then(res => res.json())
        .then(data => this.getSolution(data))
        .catch(err => console.log("Users not found."))
    }

    getSolution(usersData) {
      Promise.all(usersData.map((username, i) => {
        const URL = `https://raw.githubusercontent.com/${username.user.login}/${this.props.labName}-${this.props.classNum}/${username.head.sha}/${this.props.fileName}`
        return fetch(URL)
          .then(res => res.text())
          .catch(err => console.log("Solution not found."))
        }))
        .then(values => {
          this.setState({
            users: usersData,
            solutions: values
          })
      })
    }

    componentWillReceiveProps() {
      this.getAPI()
    }

    componentDidMount() {
      this.getAPI()
    }

    parsedSolutions = () => {
      return this.state.users.map((username, i) => {
        return (
          <Segment padded key={i} className='codeSolution'>
            <Label attached='top'><a href={username.user.url}>{username.user.login}</a></Label>
            <SyntaxHighlighter language='javascript' style={docco}>{this.state.solutions[i]}</SyntaxHighlighter>
          </Segment>
        )
      })
    }

    render() {
      return (
        <div className="githubSearchResults">
          <div className='usernameList'>
            <strong>Solutions</strong> {this.parsedSolutions()}
          </div>
        </div>
      )
    }
  }


export default SearchGithub
