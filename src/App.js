import React, { useState } from 'react'
import { Navbar, Products, Cart, Checkout, OrderConfirmation, Login } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import productData from './data/feeds.json'

function App() {
  const [products, setProducts] = useState(productData)
  const [user, setUser] = useState({ name: "", email: "" })

  const login = details => {
    setUser({
      name: details.name,
      email: details.email
    })
  }

  const handleAddToCart = (id) => {
    const modifieData = products.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    setProducts(modifieData)
  }

  const handleRemoveFromCart = (id) => {
    const modifieData = products.map(item =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    )
    setProducts(modifieData)
  }

  const cart = products.filter(item => item.qty !== 0)

  return (
    <Router>
      <div>
        <Navbar badgeVal={cart.length} />
        <Switch>
          <Route exact path='/'>
            <Login login={login} />
          </Route>
          <Route exact path='/store'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/orderconfirmation" exact>
            <OrderConfirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;