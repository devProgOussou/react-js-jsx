import React from "react";
import imageInSrc from "./imageInSrc.jpeg";
import myVideo from "./myVideo.mp4";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
            <h1 className="title red">Ousmane Fall</h1>

            <br />

            <img
              src={imageInSrc}
              alt="first"
              style={{ width: "320px", height: "240px" }}
            />

            <br />
            <br />

            <img
              src={"./imageInPublic.jpeg"}
              alt="second"
              style={{ width: "320px", height: "240px" }}
            />
          </div>

          <video style={{ width: "320px", height: "240px" }} controls>
            <source src={myVideo} type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
    );
  }
}
