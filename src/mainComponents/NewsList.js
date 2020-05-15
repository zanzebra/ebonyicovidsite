import React from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      currentPage: 1,
      newsPerPage: 4,
      paginationWindow: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get("https://ebonyicovidsite.ew.r.appspot.com/news/").then((res) => {
      this.setState({ news: res.data });
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { news, currentPage, newsPerPage } = this.state;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentListOfNews = news.slice(indexOfFirstNews, indexOfLastNews);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    const prevPage = () => {
      if (currentPage !== 1) {
        this.setState({ currentPage: currentPage - 1 });
      }
    };
    const nextPage = () => {
      if (currentPage !== pageNumbers.length) {
        this.setState({ currentPage: currentPage + 1 });
      }
    };

    return (
      <div className="news-wrap">
        <div className="blog-content">
          {currentListOfNews.map((e) => (
            <NewsCard
              key={e.id}
              id={e.id}
              title={e.title}
              content={e.content}
              description={e.description}
              timestamp={e.timestamp}
              photo={e.photo}
            />
          ))}
        </div>
        <div className="container pagination-label">
          <div className="pagination p12">
            <ul>
              <span>
                <li onClick={prevPage}>Previous</li>
              </span>
              <span className="is-active" href="#">
                <li>{currentPage}</li>
              </span>
              <span>
                <li onClick={nextPage}>Next</li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsList;
