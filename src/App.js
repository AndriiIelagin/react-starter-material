import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/registration/' component={Registration} />
          <Route path='/login/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
