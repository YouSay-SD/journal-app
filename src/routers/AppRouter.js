import React, { useEffect, useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState( true );
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( async( user ) => {
      
      if ( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn( true );
        dispatch( startLoadingNotes( user.uid ) );

      } else {
        setIsLoggedIn( false );
      }

      setChecking( false );

    });
    
  }, [ dispatch, setChecking, setIsLoggedIn ]);

  if ( checking ) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (

    <Router>

      <div>

        <Switch>

          {

            ( isLoggedIn ) 
            // Public Route
            ? <>
                <Route exact path="/" component={ JournalScreen } />

                <Redirect to="/" />

              </>

            // Private Route
            : <>
                <Route path="/auth" component={ AuthRouter } />

                <Redirect to="/auth/login" />

              </>            
          }

        </Switch>

      </div>
        
    </Router>

  )
}
