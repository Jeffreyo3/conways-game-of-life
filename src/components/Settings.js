import React from "react";
import GridSize from "./setting/GridSize";
import Controls from "./setting/Controls";
import GridTypes from "./setting/GridTypes";
import LifeControls from "./setting/LifeControls";
import "./Settings.css";

const Settings = () => {
  return (
    <>
      <h3>Customize!</h3>
      <div class="settings">
      <GridSize />
      <GridTypes />
      <Controls />
      <LifeControls />
      </div>
    </>
  );
};

export default Settings;
