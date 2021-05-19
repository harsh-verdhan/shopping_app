import React, { useState } from 'react'
import { Button, Grid, Typography, TextField, Paper, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function Login({ login }) {
  const classes = useStyles();
  const [details, setDetails] = useState({ name: "", email: "", password: "" })

  const submitHandler = e => {
    login(details);
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Login</Typography>
          <form >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField name="name" required={true} label="Name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
              </Grid >
              <Grid item xs={12} sm={6}>
                <TextField type="email" name="email" required label="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="password" name="password" required label="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
              </Grid>
            </Grid >
            <br />
            <Button onClick={submitHandler} type="submit" component={Link} to="/store" size="large" variant="contained" color="primary">Login</Button>
          </form>
        </Paper>
      </main>
    </>
  )
}

export default Login;