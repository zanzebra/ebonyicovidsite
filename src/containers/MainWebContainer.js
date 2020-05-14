import React from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "../mainComponents/Home";
import Navbar from "../mainComponents/Navbar";
import Footer from "../mainComponents/Footer";
import Faq from "../mainComponents/Faq";
import Graph from "../mainComponents/Graph";
import Contact from "../mainComponents/Contact";
import NewsList from "../mainComponents/NewsList";
import NewsDetail from "../mainComponents/NewsDetail";

class MainWebContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/graph" component={Graph} />
          <Route path="/contact_us" component={Contact} />
          <Route path="/news" component={NewsList} />
          <Route path="/newsdetail/:articleID" component={NewsDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainWebContainer;
