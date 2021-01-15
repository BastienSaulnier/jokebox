import React from "react";
import "./index.scss";

import { useSelector } from "react-redux";

import UserDropdown from "../UserDropdown";
import AppLink from "../AppLink";

export interface IUserMonitorProps {}

export default function UserMonitor(props: IUserMonitorProps) {
  const { username, avatar_thumbnail_url } = useSelector((state) => state.user);

  return (
    <div className="UserMonitor">
      <AppLink linkPath="/profile" linkClassName="HomeButton">
        <h5 className="userName">{username}</h5>
        <div className="userPictureContainer">
          <img
            className="userPicture"
            src={avatar_thumbnail_url || "/assets/avatar_thumbnail.png"}
            alt="User Thumbnail"
          />

          <div className="userNotification" />
        </div>
      </AppLink>

      <UserDropdown />
    </div>
  );
}
