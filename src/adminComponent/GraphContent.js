import React, { Component } from "react";
import NigeriaGraphForm from "./NigeriaGraphForm";
import EbonyiGraphForm from "./EbonyiGraphForm";

class GraphContent extends Component {
  constructor() {
    super();
    this.state = {
      renderType: "nigeria",
    };
  }
  openEditForm = () => {
    this.editForm();
  };
  openCreateForm = () => {
    this.createForm();
  };

  editForm = () => {
    this.setState({ renderType: "ebonyi" });
  };
  createForm = () => {
    this.setState({ renderType: "nigeria" });
  };
  render() {
    const renderType = this.state.renderType;
    let render;
    if (renderType === "nigeria") {
      render = <NigeriaGraphForm />;
    } else {
      render = <EbonyiGraphForm />;
    }
    return (
      <div className="page-content">
        <div className="content-categories">
          <div className="label-wrapper" onClick={this.openCreateForm}>
            <input className="nav-item" name="nav" type="radio" id="opt-1" />
            <label className="category" htmlFor="opt-1">
              Nigeria
            </label>
          </div>
          <div className="label-wrapper" onClick={this.openEditForm}>
            <input className="nav-item" name="nav" type="radio" id="opt-2" />
            <label className="category" htmlFor="opt-2">
              Ebonyi
            </label>
          </div>
        </div>
        {render}
      </div>
    );
  }
}
export default GraphContent;
