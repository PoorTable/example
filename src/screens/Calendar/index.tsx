import React, { ReactElement } from "react";
import CalendarController from "./CalendarController";
import CalendarView from "./CalendarView";

export default function CalendarScreen (): ReactElement  {
  return (
    <CalendarController>
      <CalendarView/>
    </CalendarController>
  );
}
