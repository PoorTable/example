import React, { ReactElement } from "react";
import ProfileController from "./ProfileController";
import ProfileView from "./ProfileView";

export default function ProfileScreen (): ReactElement  {
  return (
    <ProfileController>
      < ProfileView/>
    </ProfileController>
  );
}
