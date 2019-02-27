import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Roster from './roaster'
import Schedule from './schedule'
import Contact from './contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
