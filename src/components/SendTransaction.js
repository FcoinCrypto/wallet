import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  textField: {
    margin: '10px',
  },
  button: {
    margin: '10px',
  },
});

function SendTransaction() {
  const classes = useStyles();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/api/wallets/send',
        {
          recipient,
          amount,
        },
        { withCredentials: true }
      );
      console.log(response);
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        Envoyer des Monnaies
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          type="text"
          label="Adresse du destinataire"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
          className={classes.textField}
          required
        />
        <TextField
          type="number"
          label="Montant"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className={classes.textField}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
}

export default SendTransaction;
