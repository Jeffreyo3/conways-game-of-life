import React from "react";
import { useDispatch } from "react-redux";
import { setDimensions } from "./actions/gridAction";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./App.css";

import Display from "./components/gridDisplay/Display";
import Settings from "./components/Settings";
import Rules from "./components/about/Rules";
import About from "./components/about/About";

function App() {
  const dispatch = useDispatch();
  // set initial window size to state
  React.useEffect(() => {
    dispatch(
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    );
  }, [dispatch]);
  // since grid is dynamically rendered,
  // cause App to re-render if window size is changed
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
    console.log('hi')
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h1>
          Conway's
          <span className="header-divider" /> Game of Life
        </h1>
        <nav id="info">
          <a href="#about">
            <AiOutlineInfoCircle />
          </a>
        </nav>
      </header>
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
      </div> {/* close div class="top" */}

      <div className="section bottom">
        <About />
      </div>
      <footer>
        <h6>© Copyright Jeffrey Orndorff 2020</h6>
      </footer>
    </div>
  );
}

export default App;
