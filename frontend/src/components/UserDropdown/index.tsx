import * as React from "react";
import "./index.scss";

import { connect } from "react-redux";

import AppLink from "../AppLink";
import AppButton from "../AppButton";

import { logout } from "../../redux/actions/login.actions";

export interface IUserDropdownProps {
  pannelRef?: any;
  burgerRef?: any;
  logout?: any;
}

export interface IUserDropdownState {
  pannelRef?: any;
  burgerRef?: any;
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

  toggleDropdown = (isOpen) => {
    this.setState({ isOpen: isOpen });
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
                linkClassName="UserProfileButton"
                withIcon
                iconUrl="/assets/home_icon.png"
              />
            </li>

            <li>
              <AppLink
                linkPath="/profile/edit"
                linkLabel="Edit profile"
                linkClassName="EditProfileButton"
                withIcon
                iconUrl="/assets/edit_icon.png"
              />
            </li>

            <li>
              <AppLink
                linkPath="/profile/settings"
                linkLabel="Settings"
                linkClassName="UserSettingsButton"
                withIcon
                iconUrl="/assets/settings_icon.png"
              />
            </li>
            <hr />
            <li>
              {/* <AppLink
                linkPath="/"
                linkLabel="logout"
                linkClassName="LogoutButton"
              /> */}
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
