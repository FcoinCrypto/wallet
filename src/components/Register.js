import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';
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

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/register`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      history.push('/login');
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          required
        />
        <TextField
          className={classes.textField}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <TextField
          className={classes.textField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <Button className={classes.button} type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
