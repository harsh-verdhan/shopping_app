import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';

import useStyles from './styles';

import AddressForm from '../AddressForm';

function Checkout() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <AddressForm />
        </Paper>
      </main>
    </>
  )
}

export default Checkout;