import React from "react";
import "./index.scss";

import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Header from "../Header/index";
import Home from "../../pages/Home/index";
import Login from "../../pages/Login/index";
import Signup from "../../pages/Signup/index";
import Profile from "../../pages/Profile/index";
import ProfileEdit from "../../pages/ProfileEdit";
import ProfileSettings from "../../pages/ProfileSettings";
import { store } from "../../redux/store";

interface ILayoutProps {
  isLogged?: boolean;
}

interface ILayoutState {}

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public render() {
    const { isLogged } = store.getState().login;
    return (
      <div className="Layout">
        <Router>
          <Header isLogged={isLogged ? true : false} />
          <Switch>
            {isLogged ? (
              <>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/edit" component={ProfileEdit} />
                <Route
                  exact
                  path="/profile/settings"
                  component={ProfileSettings}
                />
                <Redirect to="/home" />
              </>
            ) : (
              <>
                <Route exact path="/" component={Login} />
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/signup" component={Signup} />
                <Redirect to="/" />
              </>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

export default connect(mapStateToProps, null)(Layout);
