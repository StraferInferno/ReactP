'use strict';
require('../style.css');

import React from "react";
import ReactDOM from "react-dom";
import {Router , Route , IndexRoute , hashHistory } from "react-router";
import MyLayout from "./pages/mylayout";
//import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import TodosPage from "./pages/TodosPage";

const app = document.getElementById("app");
ReactDOM.render(
  <Router history ={hashHistory}>
    <Route path="/" component = {MyLayout} >
          <IndexRoute  component={TodosPage}></IndexRoute>
    <Route path = "archives(/:article)" component = {Archives} ></Route>
    <Route path = "settings" component = {Settings} ></Route>
    </Route>
  </Router>,
app);





