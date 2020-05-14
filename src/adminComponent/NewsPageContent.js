import React, { Component } from "react";
import MessageRightBar from "./MessageRightBar";
import NewsFormContent from "./NewsFormContent";

class NewsPageContent extends Component {
  render() {
    return (
      <React.Fragment>
        <NewsFormContent />
        <MessageRightBar />
      </React.Fragment>
    );
  }
}
export default NewsPageContent;
