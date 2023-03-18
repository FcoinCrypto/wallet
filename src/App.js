import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Login from './components/Login';
import Register from './components/Register';
import TransactionHistory from './components/TransactionHistory';
import SendTransaction from './components/SendTransaction';
import Wallet from './components/Wallet';
import CreateWallet from './components/CreateWallet';
import WalletPage from './pages/WalletPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SendTransactionPage from './pages/SendTransactionPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={WalletPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/history" component={TransactionHistoryPage} />
        <Route exact path="/send" component={SendTransactionPage} />
      </Switch>
    </Router>
  );
}

export default App;
