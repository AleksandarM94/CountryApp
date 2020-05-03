import React from "react";
import "./App.css";

import Nav from "./components/Nav";

import CountryPage from "./pages/CountryPage";
import CountriesBlocPage from "./pages/CountriesBlocPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllCountriesPage from "./pages/AllCountriesPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/countries/bloc/:bloc"
            exact
            component={CountriesBlocPage}
          />
          <Route path="/countries/:alpha3" exact component={CountryPage} />
          <Route path="/countries" exact component={AllCountriesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
