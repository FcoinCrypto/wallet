import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

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

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Envoyer une requête POST à l'API Node.js pour se connecter avec les informations d'identification de l'utilisateur.
    // Si la connexion est réussie, rediriger vers la page d'historique de transaction.
    // Sinon, afficher un message d'erreur.
    history.push('/history');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={classes.textField}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={classes.textField}
          required
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
