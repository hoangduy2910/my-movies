import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import MovieTVShowDetail from "./components/MovieTVShowDetail/MovieTVShowDetail";
import Credits from "./components/Credits/Credits";
import Person from "./components/Person/Person";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} />
          <Route path="/person/:id" component={Person} />
          <Route path="/:id/credits" component={Credits} />
          <Route path="/:id" component={MovieTVShowDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
