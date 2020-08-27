import React from "react";
import GridSize from "./setting/GridSize";
import Controls from "./setting/Controls";
import GridTypes from "./setting/GridTypes";
import MobileControls from './setting/MobileControls'
const Settings = () => {
  return (
    <>
      <GridSize />
      {/* <Controls /> */}
      <GridTypes />
      <MobileControls />
    </>
  );
};

export default Settings;
