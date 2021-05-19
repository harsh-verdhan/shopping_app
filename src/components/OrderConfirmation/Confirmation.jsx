import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Confirmation.module.css'


function Checkout() {

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={8} className={styles.card}>
          <CardContent>
            <Typography variant="h2">
              Thank You for your order.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout;
