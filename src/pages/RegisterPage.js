import React from 'react';
import { makeStyles } from '@mui/styles';

import Register from '../components/Register';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

function RegisterPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Register />
    </div>
  );
}

export default RegisterPage;
