import * as React from "react";
import "./index.scss";

import { store } from "../../redux/store";
import { connect } from "react-redux";
import history from "../../history";

import { Redirect, Router, Switch, Route } from "react-router-dom";

import Header from "../Header/index";
import Hero from "../Hero/index";
import Home from "../../pages/Home/index";
import Login from "../../pages/Login/index";
import Signup from "../../pages/Signup/index";
import Profile from "../../pages/Profile/index";

interface IAppRouterLayoutProps {
  isLogged?: boolean;
}

interface IAppRouterLayoutState {}

class AppRouterLayout extends React.Component<
  IAppRouterLayoutProps,
  IAppRouterLayoutState
> {
  render() {
    const { isLogged } = store.getState().login;

    return (
      <div className="Layout">
        <Router history={history}>
          <Header isLogged={isLogged} />
          <Hero />
          <Switch>
            {isLogged ? (
              <>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
              </>
            ) : (
              <>
                <Redirect to="/" />
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, null)(AppRouterLayout);
