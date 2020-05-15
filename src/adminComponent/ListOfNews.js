import React, { Component } from "react";
import axios from "axios";

class ListOfNews extends Component {
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
      console.log(res.data);
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
        <div className="blog-content1">
          {currentListOfNews.map((e) => (
            <div key={e.id} className="blue listdiv">
              <div>
                <a className="news-title" href={`/newsdetail/${e.id}`}>
                  {e.title}
                </a>
              </div>
              <div>
                <p>{e.description}</p>
              </div>
            </div>
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
export default ListOfNews;
