import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import SignIn from './components/SignIn';

function App() {

  const  [user, loading] = useAuthState(auth)
  return (
    <div className="app">
      
      <Router>
        {user ? (
          <SignIn />
        ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
        
      </Router>

    </div>
  );
}

export default App;



const AppBody = styled.div`
  display: flex;
  height: 100vh;

`