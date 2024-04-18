import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css'; // Only need to import once

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* You can add more routes if you have other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
