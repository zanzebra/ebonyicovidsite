import React, { Component } from "react";
import axios from "axios";
class MessageRightBar extends Component {
  constructor() {
    super();
    this.state = {
      message: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://ebonyicovidsite.ew.r.appspot.com/contact/")
      .then((res) => {
        this.setState({ message: res.data });
        console.log(res.data);
      });
  }

  render() {
    return (
      <div className="right-bar">
        <div className="top-part">
          Today Messages
          <div className="count">{this.state.message.length}</div>
        </div>
        <div className="right-content">
          {this.state.message.map((e) => (
            <div className="task-box blue">
              <div className="description-task">
                <div className="time">
                  <span>{e.email}</span>
                </div>
                <div className="task-name">{e.subject}</div>
                <div className="task-content">
                  <p>{e.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default MessageRightBar;
