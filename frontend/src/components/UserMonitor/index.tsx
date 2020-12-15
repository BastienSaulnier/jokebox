import React from "react";
import "./index.scss";

import UserDropdown from "../UserDropdown";
import AppLink from "../AppLink";

export interface IUserMonitorProps {}

export default function UserMonitor(props: IUserMonitorProps) {
  return (
    <div className="UserMonitor">
      <AppLink linkPath="/home" linkClassName="HomeButton">
        <h5 className="userName">John D.</h5>
        <div className="userPictureContainer">
          <img
            className="userPicture"
            src="https://randomuser.me/api/portraits/women/24.jpg"
            alt="User Thumbnail"
          />
          <div className="userNotification"></div>
        </div>
      </AppLink>

      <UserDropdown />
    </div>
  );
}
