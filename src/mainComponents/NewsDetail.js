import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

class NewsDetail extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/news/${articleID}`).then((res) => {
      this.setState({ news: res.data });
    });
  }
  onShare = () => {
    const overlay = document.querySelector(".card-overlay");
    const shareModal = document.querySelector(".share");
    if (navigator.share) {
      navigator
        .share({
          title: this.state.news.title,
          url: window.document.location.href,
        })
        .then(() => {
          console.log("thanks for sharing!");
        })
        .catch(console.error);
    } else {
      overlay.classList.add("show-share");
      shareModal.classList.add("show-share");
    }
  };
  removeShareModal = () => {
    const overlay = document.querySelector(".card-overlay");
    overlay.classList.remove("show-share");
  };

  render() {
    return (
      <div className="newsdetail-wrap">
        <div id="card" className="detail-cards">
          <div className="card-image">
            <div className="overlay"></div>
            <img src={this.state.news.photo} alt="Cardpicture" />
          </div>
          <div className="card-header">
            <div className="avatar">
              <img src="images/Ebonyi.jpg" alt="Admin" />
            </div>
            <div className="user">
              <div className="name">Admin</div>
              <div className="description">25th Oct 2019</div>
            </div>
            <div className="card-actions2">
              <button className="share-button" onClick={this.onShare}>
                <FontAwesomeIcon icon={faShareAlt} className="admin-icons" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="title">{this.state.news.title}</div>
            <div className="content">{this.state.news.content}</div>
          </div>
        </div>

        <div className="card-overlay" onClick={this.removeShareModal}>
          <div className="share">
            <FacebookShareButton
              url={window.document.location.href}
              quote={this.state.news.title}
            >
              <FacebookIcon className="icon-class" />
            </FacebookShareButton>

            <TwitterShareButton
              url={window.document.location.href}
              title={this.state.news.title}
            >
              <TwitterIcon className="icon-class" />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsDetail;
