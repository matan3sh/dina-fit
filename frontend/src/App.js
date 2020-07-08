import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import utilService from './services/utilService';

import Navbar from './components/layout/Navbar';
import Navbottom from './components/layout/Navbottom';
import FloatingButton from './components/shared/FloatingButton';
import Alert from './components/shared/Alert';

import Home from './components/pages/Home';
import Address from './components/pages/Address';
import Programs from './components/pages/Programs';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  utilService.setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <PrivateRoute exact path='/dashbaord' component={Dashboard} />
          <Route exact path='/' component={Home} />
          <Route exact path='/address' component={Address} />
          <Route exact path='/programs' component={Programs} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <FloatingButton />
        <Navbottom />
      </Router>
    </Provider>
  );
}

export default App;
