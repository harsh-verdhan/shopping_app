import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

function Navbar({ badgeVal }) {
  const classes = useStyles();
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
              Laptop Store
                </Typography>
            <div className={classes.grow} />
            {location.pathname === '/store' && (
              <div className={classes.button}>
                <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={badgeVal} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

export default Navbar;