import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <h1>Home page</h1>
          </Route>
        </Switch>
      </>
    </Router>

    </div>
  );
}

export default App;
