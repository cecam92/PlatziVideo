import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/register";
import notFound from "../containers/notfound";
import Layout from "../components/Layout";
import Player from "../containers/Player";

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />

        <Route component={notFound} />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
