/**
 * Copyright (c) 2015 - 2017 Markus Kohlhase <mail@markus-kohlhase.de>
 */

require('es6-promise').polyfill(); // required for redux-form

import React    from "react";
import ReactDOM from "react-dom";
import App      from "./components/App";
import store    from "./Store";
import Actions  from "./Actions";
import Router    from "./Router";

import { Provider, connect } from "react-redux";

if (__DEVELOPMENT__) {
  window.React = React;
  // const { whyDidYouUpdate } = require('why-did-you-update');
  // whyDidYouUpdate(React);
}

// listen for back button, forward button, etc.
window.addEventListener("hashchange", Router.route, false);

const ConnectedApp = connect((s) => s)(App);

const rootElement = document.querySelector('#app');

// inject the 'dispatch' method and the state
const Wrapper = <Provider store = {store} ><ConnectedApp /></Provider>;

if(window.location.hash == ""){
  store.dispatch(Actions.showMenu());
}

// read the hash url and navigate to the right page
store.dispatch(Actions.updateStateFromURL);
Router.route();

ReactDOM.render(Wrapper, rootElement);