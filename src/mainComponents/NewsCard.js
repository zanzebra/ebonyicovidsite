import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

class NewsCard extends Component {
  render() {
    const publishedDate = new Date(this.props.timestamp);
    const dd = String(publishedDate.getDate()).padStart(2, "0");
    const mm = String(publishedDate.getMonth() + 1).padStart(2, "0");
    const yyyy = publishedDate.getFullYear();
    const getStringPublishedDate = dd + "/" + mm + "/" + yyyy;
    return (
      <div id="card" class="cards">
        <div className="card-header">
          <div className="avatar">
            <img src="images/ebonyi logo.jpeg" alt="Admin" />
          </div>
          <div className="user">
            <div className="name">Admin</div>
            <div className="description">{getStringPublishedDate}</div>
            <div className="time">17 hr ago</div>
          </div>
        </div>
        <div className="card-image">
          <div className="overlay"></div>
          <img src={this.props.photo} alt="CardPicture" />
        </div>
        <div className="card-body">
          <a href={`/newsdetail/${this.props.id}`}>
            <div className="title">{this.props.title}</div>
          </a>

          <div className="content">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
export default NewsCard;
