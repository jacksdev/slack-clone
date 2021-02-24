import React from 'react';
import Header from './components/Header.js'
import SideBar from './components/SideBar'
import styled from 'styled-components';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path="/" exact>
                //TODO Chat components
              </Route>
            </Switch>
          </AppBody>
          
        </>
      </Router>

    </div>
  );
}

export default App;



const AppBody = styled.div`


`