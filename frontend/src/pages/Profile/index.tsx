import React from "react";
import "./index.scss";

import { useSelector } from "react-redux";

import UserProfile from "../../components/UserProfile/index";

export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  const { firstname, lastname, username, email, avatar_url } = useSelector(
    (state) => state.user
  );

  return (
    <div className="Profile">
      <div className="profileContent center">
        <h2>Profile</h2>
        <div className="profileInfos">
          <UserProfile
            firstname={firstname}
            lastname={lastname}
            username={username}
            email={email}
            avatar_url={avatar_url}
          />
        </div>
      </div>
    </div>
  );
}
