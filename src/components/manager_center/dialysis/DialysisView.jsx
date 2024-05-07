/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SessionData from "./SessionData";
import WeightData from "./WeightData";
import PBData from "./PBData";
import MedicinesGiven from "./MedicinesGiven";
import MachineData from "./MachineData";
import NotesSessionData from "./NotesSessionData";

export default function DialysisView() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 "
      dir="rtl"
    >
      <SessionData />

      <WeightData />

      <PBData />

      <MedicinesGiven />

      <MachineData />

      <NotesSessionData />
    </div>
  );
}
