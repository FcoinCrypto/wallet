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

function CreateWallet({ userId, setWallet }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`/api/wallets/${userId}`, { name });
      setWallet(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Créer un nouveau portefeuille
      </Typography>
      <TextField
        className={classes.textField}
        label="Nom du portefeuille"
        variant="outlined"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Chargement...' : 'Créer'}
      </Button>
    </form>
  );
}

export default CreateWallet;
