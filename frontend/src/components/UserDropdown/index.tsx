import * as React from "react";
import "./index.scss";

import { withRouter } from "react-router-dom";

import AppLink from "../AppLink";

export interface IUserDropdownProps {
  isActive?: boolean;
  isOpen?: boolean;
}

export interface IUserDropdownState {}

class UserDropdown extends React.Component<
  IUserDropdownProps,
  IUserDropdownState
> {
  constructor(props: IUserDropdownProps) {
    super(props);

    this.state = {
      isActive: false,
      isOpen: false,
    };
  }

  toggleDropdown = (isActive, isOpen) => {
    this.setState({ isActive: !isActive, isOpen: !isOpen });
  };

  public render() {
    const { isActive, isOpen } = this.state;
    const { match, location, history } = this.props;
    return (
      <div className="UserDropdown">
        <div
          className={
            isActive ? "UserDropdownIcon  haveBorder" : "UserDropdownIcon"
          }
          onClick={() => this.toggleDropdown(isActive, isOpen)}
        >
          <div className="dropdownIconContainer">
            <div
              className={isActive ? "dropdownIcon" : "dropdownIcon isActive"}
            >
              <span className="dropdownBar"></span>
              <span className="dropdownBar"></span>
              <span className="dropdownBar"></span>
            </div>
          </div>
        </div>
        <nav
          className={isOpen ? "UserDropdownPanel" : "UserDropdownPanel isOpen"}
        >
          <ul>
            <li onClick={() => this.toggleDropdown(isActive, isOpen)}>
              <AppLink
                linkPath="/profile"
                linkLabel="User profile"
                linkClassName="UserProfileButton"
                withIcon
                iconUrl="/assets/home_icon.png"
              />
            </li>

            <li onClick={() => this.toggleDropdown(isActive, isOpen)}>
              <AppLink
                linkPath="/profile/edit"
                linkLabel="Edit profile"
                linkClassName="EditProfileButton"
                withIcon
                iconUrl="/assets/edit_icon.png"
              />
            </li>

            <li onClick={() => this.toggleDropdown(isActive, isOpen)}>
              <AppLink
                linkPath="/profile/settings"
                linkLabel="Settings"
                linkClassName="UserSettingsButton"
                withIcon
                iconUrl="/assets/settings_icon.png"
              />
            </li>
            <hr />
            <li onClick={() => this.toggleDropdown(isActive, isOpen)}>
              <AppLink
                linkPath="/"
                linkLabel="logout"
                linkClassName="LogoutButton"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(UserDropdown);
