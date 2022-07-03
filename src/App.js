import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LoginPage from "./Components/Login/LoginPage";
import ToDoList from './Components/To-Do/ToDoList';

function App() {

  return (
    <Router>
      <div className="app">
        <div className="app_main_container">
          <Switch>
            <Route exact path="/">
              <div className={`app app--is-login app-content`}>
                <LoginPage />
              </div>
            </Route>
            <Route path="/to-do">
              <ToDoList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
