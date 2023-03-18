import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendTransaction from '../components/SendTransaction';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function SendTransactionPage() {
  const classes = useStyles();
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleRecipientAddressChange = (event) => {
    setRecipientAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSend = () => {
    // TODO: Call backend API to send the transaction
    console.log('Send transaction');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
        <Typography variant="h5" align="center" gutterBottom>
          Send Transaction
        </Typography>
        <TextField
          className={classes.input}
          label="Recipient Address"
          variant="outlined"
          value={recipientAddress}
          onChange={handleRecipientAddressChange}
        />
        <TextField
          className={classes.input}
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSend}
          disabled={!recipientAddress || !amount}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default SendTransactionPage;
