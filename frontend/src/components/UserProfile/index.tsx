import * as React from "react";
import "./index.scss";

import UserFileIcon from "../../assets/svg/UserFileIcon";

import AppButton from "../AppButton/index";

export interface IUserProfileProps {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  avatar_url?: string;
}

export default function UserProfile(props: IUserProfileProps) {
  const {
    firstname,
    lastname,
    username,
    email,

    avatar_url,
  } = props;

  return (
    <div className="UserProfile">
      <div className="userProfileAvatar">
        <AppButton
          buttonClassName="uploadAvatarButton"
          buttonLabel={<UserFileIcon />}
          buttonType="button"
          buttonAction={console.log("click !")}
        />
        <img src={avatar_url || "/assets/avatar.png"} alt="User Avatar" />
      </div>

      <div className="userProfileInfos">
        <h3>{username}</h3>
        <p>
          {firstname} {lastname}
        </p>
        <strong>{email}</strong>
      </div>
    </div>
  );
}
