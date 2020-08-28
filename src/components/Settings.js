import React from "react";
import GridSize from "./setting/GridSize";
import Controls from "./setting/Controls";
import GridTypes from "./setting/GridTypes";
import LifeControls from './setting/LifeControls'
const Settings = () => {
  return (
    <>
      <GridSize />
      <Controls />
      <GridTypes />
      <LifeControls />
    </>
  );
};

export default Settings;
