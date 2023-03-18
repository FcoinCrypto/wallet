import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Paper, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import WalletInfo from '../components/WalletInfo';
import SendTransaction from '../components/SendTransaction';
import TransactionHistory from '../components/TransactionHistory';
import CreateWallet from '../components/CreateWallet';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    marginTop: '20px',
  },
  button: {
    margin: '20px',
  },
});

function WalletPage() {
  const classes = useStyles();
  const history = useHistory();
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    fetch(`http://localhost:3001/api/wallets/${userId}`)
      .then((response) => response.json())
      .then((data) => setWallet(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCreateWallet = (wallet) => {
    setWallet(wallet);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Mon portefeuille
      </Typography>
      {wallet ? (
        <Paper className={classes.paper}>
          <WalletInfo wallet={wallet} />
          <SendTransaction wallet={wallet} />
          <TransactionHistory wallet={wallet} />
        </Paper>
      ) : (
        <CreateWallet onCreateWallet={handleCreateWallet} />
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleLogout}
      >
        Déconnexion
      </Button>
    </Container>
  );
}

export default WalletPage;
