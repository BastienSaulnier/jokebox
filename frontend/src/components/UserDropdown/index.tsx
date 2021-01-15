import * as React from "react";
import "./index.scss";

import { connect } from "react-redux";

import AppLink from "../AppLink";
import AppButton from "../AppButton";

import UserProfileIcon from "../../assets/svg/UserProfileIcon";

import { logout } from "../../redux/actions/login.actions";

export interface IUserDropdownProps {
  logout?: any;
}

export interface IUserDropdownState {
  isOpen?: boolean;
}

class UserDropdown extends React.Component<
  IUserDropdownProps,
  IUserDropdownState
> {
  constructor(props: IUserDropdownProps) {
    super(props);
    this.pannelRef = React.createRef();
    this.burgerRef = React.createRef();
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    const { isOpen } = this.state;
    if (this.pannelRef.contains(e.target)) {
      this.setState({ isOpen: false });
    } else if (this.burgerRef.contains(e.target) && isOpen === false) {
      this.setState({ isOpen: true });
    } else if (this.burgerRef.contains(e.target) && isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: false });
    }
  };

  public render() {
    const { isOpen } = this.state;
    const { logout } = this.props;

    return (
      <div className="UserDropdown">
        <div
          ref={(pannelRef) => (this.burgerRef = pannelRef)}
          className={
            isOpen ? "UserDropdownIcon" : "UserDropdownIcon haveBorder"
          }
        >
          <div className="dropdownIconContainer">
            <div className={isOpen ? "dropdownIcon  isActive" : "dropdownIcon"}>
              <span className="dropdownBar"></span>
              <span className="dropdownBar"></span>
              <span className="dropdownBar"></span>
            </div>
          </div>
        </div>
        <nav
          ref={(pannelRef) => (this.pannelRef = pannelRef)}
          className={isOpen ? "UserDropdownPanel  isOpen" : "UserDropdownPanel"}
        >
          <ul>
            <li>
              <AppLink
                linkPath="/profile"
                linkLabel="User profile"
                linkClassName="UserProfileLink"
                linkIcon={<UserProfileIcon />}
                haveIcon
              />
            </li>

            <hr />

            <li>
              <AppButton
                buttonClassName="LogoutButton"
                buttonLabel="Logout"
                buttonType="button"
                buttonAction={logout}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(UserDropdown);
