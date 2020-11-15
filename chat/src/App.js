import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Auth from '../src/pages/Auth'
import Home from '../src/pages/Home'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path={['/', '/login', '/register']} component={Auth} />
        <Route exact path="/im" component={Home} />
      </div>
    )
  }
}

export default App
