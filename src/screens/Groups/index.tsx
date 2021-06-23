import React, { ReactElement } from "react";
import GroupsController from "./GroupsController";
import GroupsView from "./GroupsView";

export default function GroupsScreen (): ReactElement  {
  return (
    <GroupsController>
      < GroupsView/>
    </GroupsController>
  );
}
