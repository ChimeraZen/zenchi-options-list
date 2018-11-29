import React, { Component } from 'react'

import { GitHubReadme } from 'zenchi-github-readme'

import OptionsList from './lib/zenchi-options-list'

import './styles.css'

class App extends Component {
  componentDidMount() {
    const readMe = 'https://raw.githubusercontent.com/ChimeraZen/zenchi-options-list/master/README.md'
    
    fetch(readMe)
      .then(res => res.text())
      .then(md => {
        this.setState({ md })
      })
  }
  
  render() {
    return this.state !== null &&
      <div className="App">
        <header>
          <h2>ZenChi Options List</h2>
          <OptionsList>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </OptionsList>
        </header>
        <GitHubReadme file={this.state.md} />
      </div>
  }
}

export default App;
