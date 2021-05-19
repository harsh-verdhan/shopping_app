import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onAddToCart, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.price * item.qty}(INR)</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button variant="contained" type="button" size="small" color="secondary" onClick={() => onRemoveFromCart(item.id)}>-</Button>
          <Typography variant="h5">&nbsp;{item.qty}&nbsp;</Typography>
          <Button variant="contained" type="button" size="small" color="primary" onClick={() => onAddToCart(item.id)} >+</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;