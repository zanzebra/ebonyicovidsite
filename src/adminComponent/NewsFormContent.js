import React, { Component } from "react";
import Form from "./Form";
import ListOfNews from "./ListOfNews";

class NewsFormContent extends Component {
  constructor() {
    super();
    this.state = {
      renderType: "form",
      articleID: null,
    };
  }
  openEditForm = () => {
    this.editForm();
  };
  openCreateForm = () => {
    this.createForm();
  };

  editForm = () => {
    this.setState({ renderType: "list" });
  };
  createForm = () => {
    this.setState({ renderType: "form" });
  };
  render() {
    const renderType = this.state.renderType;
    let render;
    if (renderType === "form") {
      render = <Form />;
    } else {
      render = <ListOfNews />;
    }
    return (
      <div className="page-content">
        <div className="content-categories">
          <div className="label-wrapper" onClick={this.openCreateForm}>
            <input className="nav-item" name="nav" type="radio" id="opt-1" />
            <label className="category" htmlFor="opt-1">
              Create
            </label>
          </div>

          <div className="label-wrapper" onClick={this.openEditForm}>
            <input className="nav-item" name="nav" type="radio" id="opt-2" />
            <label className="category" htmlFor="opt-2">
              List of News
            </label>
          </div>
        </div>
        {render}
      </div>
    );
  }
}
export default NewsFormContent;
