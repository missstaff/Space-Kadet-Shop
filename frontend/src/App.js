import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";
import { signout } from "./actions/userActions.js";
import CartScreen from "./screens/CartScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import OrderHistoryScreen from "./screens/OrderHistoryScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import PaymentMethodScreen from "./screens/PaymentMethodScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ShippingAddressScreen from "./screens/ShippingAddressScreen.js";
import SigninScreen from "./screens/SigninScreen.js";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Space Kadet
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-contents">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
