import React from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Customer from "./pages/Customer"
import Transaction from "./pages/Transaction"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/product" Component={Product} />
        <Route exact path="/customer" Component={Customer} />
        <Route exact path="/transaction" Component={Transaction} />
        <Route exact path="/admin" Component={Admin} />
      </Switch>
    )
  }
}