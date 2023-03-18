import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

function WalletInfo({ userId }) {
const [wallet, setWallet] = useState({});

useEffect(() => {
    axios
      .get(`http://localhost:3001/api/wallets/${userId}`)
      .then((response) => {
        setWallet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  

return (
<div>
<Typography variant="h5">Wallet Balance</Typography>
<Typography variant="subtitle1">
Address: {wallet.address}
</Typography>
<Typography variant="subtitle1">
Balance: {wallet.balance} MON
</Typography>
</div>
);
}

export default WalletInfo;