import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDimensions } from "./actions/gridAction";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./App.css";

import Display from "./components/gridDisplay/Display";
import Settings from "./components/Settings";
import Rules from "./components/about/Rules";
import About from "./components/about/About";

function App() {
  // since grid is dynamically rendered,
  // cause App to re-render if window size is changed
  const winSize = useSelector((state) => state.windowDimensions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    );
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener(
        "resize",
        dispatch(
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          })
        )
      );
    }, 1000);
    console.log("Hi");
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <header>
        <h1>
          Conway's
          <span className="header-divider" /> Game of Life
        </h1>
        <nav id="info">
          <a href="#">
            <AiOutlineInfoCircle />
          </a>
        </nav>
      </header>
      <h2>{winSize.width}</h2>
      <div className="top">
        <div className="section left">
          <Display />
        </div>

        <div className="section middle">
          <Settings />
        </div>
        <div className="section right">
          <Rules />
        </div>
      </div>
      <div className="section bottom">
        <About />
      </div>
    </div>
  );
}

export default App;
