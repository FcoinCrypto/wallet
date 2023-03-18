import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import TransactionHistory from '../components/TransactionHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)',
  },
  container: {
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
}));

function TransactionHistoryPage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h5" align="center" gutterBottom>
          Transaction History
        </Typography>
        <TransactionHistory />
      </Box>
    </Box>
  );
}

export default TransactionHistoryPage;
