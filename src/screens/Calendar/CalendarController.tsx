import React from "react";

const CalendarController: React.FC = ({ children }) =>{
  const onPress=()=>{
    console.log('Hi');
  };
  return React.cloneElement(children as React.ReactElement,{ onPress } )
}

export default CalendarController;
