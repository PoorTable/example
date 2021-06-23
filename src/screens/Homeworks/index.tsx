import React, { ReactElement } from "react";
import GroupsController from "./HomeworksController";
import GroupsView from "./HomeworksView";

export default function HomeworkScreen (): ReactElement  {
  return (
    <GroupsController>
      < GroupsView/>
    </GroupsController>
  );
}
