import React from "react";
import GroupsScreen from "./index";

const GroupsController: React.FC = ({ children }) =>{
  const onPress=()=>{
    console.log('Hi');
  };
  return React.cloneElement(children as React.ReactElement,{ onPress } )
}

export default GroupsController;
