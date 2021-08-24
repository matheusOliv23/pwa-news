import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/home'
import Post from './containers/Post'
import './App.css'

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/:subject/:id">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  )
}

export default App
