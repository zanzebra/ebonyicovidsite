import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      content: "",
      photo: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlePhotoChange = (e) => {
    this.setState({ photo: e.target.files[0], loaded: 0 });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, content, photo } = this.state;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("photo", photo);
    console.log(formData);
    fetch("https://ebonyicovidsite.ew.r.appspot.com/news/", {
      method: "POST",
      body: formData,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };
  render() {
    return (
      <div className="tasks-wrapper">
        <form
          className="form_list"
          encType="multipart/formdata"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            type="text"
            name="title"
            placeholder="enter news title here"
            className="input-item"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="enter a description"
            className="input-item"
            onChange={this.handleChange}
          />
          <input
            type="file"
            name="photo"
            className="input-item"
            onChange={this.handlePhotoChange}
          />
          <textarea
            name="content"
            placeholder="enter your content here"
            className="input-item"
            rows="15"
            cols="30"
            onChange={this.handleChange}
          ></textarea>
          <div className="button">
            <input type="submit" className="form-button" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
