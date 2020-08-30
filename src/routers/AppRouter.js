import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'

export const AppRouter = () => {
  return (

    <>

      <Router>

          <Switch>

            <Route path="/auth" component={ AuthRouter } />

            <Route exact path="/" component={ JournalScreen } />

          </Switch>
          
      </Router>

    </>

  )
}
