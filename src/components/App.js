import React from 'react'
import Header from './header'
import Footer from './footer'
import Candidate from './Candidate'
import Search from './search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <Switch>
          <Route path="/candidate">
            <Candidate />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  )
}
