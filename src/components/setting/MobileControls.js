import React from "react";
import {
  BiPlayCircle,
  BiPauseCircle,
  BiStopCircle,
  BiSkipNextCircle,
} from "react-icons/bi";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { FiSkipForward } from "react-icons/fi";

const MobileControls = () => {
  return (
    <div className="mobile-controls">
      <ul>
        <li>
          <a href="#">
            <div className="icon">
              <FaPlay /> <FaPlay />
            </div>
            <div className="name" dataText="Play">
              <p>Play</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <FaPause /> <FaPause />
            </div>
            <div className="name" dataText="Pause">
              <p>Pause</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <FiSkipForward />
              <FiSkipForward />
            </div>
            <div className="name" dataText="Next Gen">
              <p>Next Gen</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <FaStop />
              <FaStop />
            </div>
            <div className="name" dataText="Stop">
              <p>Stop</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileControls;
