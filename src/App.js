import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import TvShowDetail from "./components/TvShowDetail/TvShowDetail";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/tv/:id" component={TvShowDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
