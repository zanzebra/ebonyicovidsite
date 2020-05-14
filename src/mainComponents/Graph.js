import React, { Component } from "react";
import NigeriaGraph from "./NigeriaGraph";
import EbonyiGraph from "./EbonyiGraph";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      renderType: "nigeria",
    };
  }
  openEbonyi = () => {
    this.ebonyi();
  };
  openNigeria = () => {
    this.nigeria();
  };

  ebonyi = () => {
    this.setState({ renderType: "ebonyi" });
  };
  nigeria = () => {
    this.setState({ renderType: "nigeria" });
  };
  render() {
    const renderType = this.state.renderType;
    let render;
    if (renderType === "nigeria") {
      render = <NigeriaGraph />;
    } else {
      render = <EbonyiGraph />;
    }
    return (
      <div className="page-content">
        <div className="content-categories">
          <div className="label-wrapper" onClick={this.openNigeria}>
            Nigeria
          </div>
          <div className="label-wrapper" onClick={this.openEbonyi}>
            Ebonyi
          </div>
        </div>
        {render}
      </div>
    );
  }
}
export default Graph;
