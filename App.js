import React from "react";
import { useContext } from "react";
import ThemeBotton from "./ThemeBotton";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      {/* Top Hero Image */}
      <div className="hero-image">
        <div className={darkMode ? "overlay-dark" : "overlay"}>
          <h2>about . developer</h2>
        </div>
      </div>
      {/* About Details */}
      <center>
        <div className={darkMode ? "about-details-dark" : "about-details"}>
          <div className="text-left">
            <img
              className="img-fluid"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="..."
            />
            <h3>Jeet Mukherjee</h3>
            <h6>COMPUTER PROGRAMMER</h6>
            <hr />
            <p>
              Dolor id mollit sit ut dolor cillum esse. Fugiat voluptate
              cupidatat irure eiusmod nulla eiusmod excepteur incididunt tempor
              nulla laboris aliqua. Dolor exercitation commodo est reprehenderit
              dolore ea aute velit reprehenderit minim. Incididunt consequat
              incididunt exercitation do nostrud. Magna reprehenderit occaecat
              duis sunt sit Lorem. Qui ea adipisicing cillum ea esse minim quis
              labore. Aliqua laboris voluptate fugiat anim consequat id veniam
              labore. Ut culpa anim nostrud quis culpa adipisicing commodo
              exercitation reprehenderit ea exercitation eiusmod. Labore elit
              ullamco eu tempor sit ipsum. Tempor amet non dolore laborum. Est
              eu aute sunt duis nisi ullamco aute dolore ipsum commodo. Sint
              magna eu adipisicing qui. Irure voluptate id sunt duis ullamco
              exercitation fugiat cillum Lorem ut dolor. Enim aliquip
              reprehenderit sint non. Incididunt labore est irure occaecat
              cupidatat. Quis eiusmod incididunt nostrud anim aliqua deserunt
              nostrud adipisicing laborum et in est. Ea aliqua in dolor velit do
              qui sunt reprehenderit irure minim sit anim aute voluptate. Aliqua
              eu irure reprehenderit commodo sunt officia ipsum sint ad minim
              adipisicing mollit est officia.
            </p>
          </div>
          <p>
            "Amet excepteur anim velit reprehenderit incididunt nisi ad. Eiusmod
            ipsum qui dolor occaecat adipisicing."
          </p>
          <div className="icons">
            <span className="fa fa-github"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-linkedin-square"></span>
          </div>
        </div>
      </center>
      {/* Floating Button  */}
      <ThemeBotton />
    </div>
  );
}

export default App;