import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Login from '../components/Login';
import Register from '../components/Register';
import SendTransaction from '../components/SendTransaction';

import WalletPage from '../pages/WalletPage';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/send" component={SendTransaction} />
        <Route exact path="/wallet" component={WalletPage} />
      </Switch>
    </Router>
  );
}

export default App;
