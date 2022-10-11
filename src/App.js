import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import './App.css';
import "./css/tailwind.output.css";
import './font/font.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/brands.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/solid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

import Home from './pages/Home';
import Web2 from './pages/Web2';

function App() {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem('reward', 0);
  }, [location]);

  return (
    <React.Fragment>
      <Switch>
        <Redirect from="/" exact to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/web2" exact component={Web2} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
