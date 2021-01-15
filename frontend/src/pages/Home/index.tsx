import * as React from "react";
import "./index.scss";

import { connect } from "react-redux";

import { getUser } from "../../redux/actions/user.actions";

export interface IHomeProps {
  getUser?: any;
}

class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    /* const { getUser } = this.props;
    getUser(); */
  }

  render() {
    return (
      <div className="Home">
        <div className="homeContent center">
          <h2>Homepage</h2>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dspatch) => ({
  getUser: () => dspatch(getUser()),
});

export default connect(null, mapDispatchToProps)(Home);
