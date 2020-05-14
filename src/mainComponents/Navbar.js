import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  getTriggerElement = (el) => {
    var isCollapse = el.getAttribute("data-collapse");
    if (isCollapse !== null) {
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute("data-collapse");
      return isParentCollapse !== null ? el.parentNode : undefined;
    }
  };

  collapseClickHandler = (event) => {
    var triggerEl = this.getTriggerElement(event.target);
    if (triggerEl === undefined) {
      event.preventDefault();
      return false;
    }

    var targetEl = document.querySelector(
      triggerEl.getAttribute("data-target")
    );
    if (targetEl) {
      triggerEl.classList.toggle("-active");
      targetEl.classList.toggle("-on");
    }
  };
  render() {
    return (
      <div className="navbar-component">
        <div className="navbar area">
          <Link to="/" className="brand">
            <div className="logo-brand">
              <img src="images/ebonyi logo.jpeg" alt="Ebonyi Covid" />
            </div>
          </Link>
          <nav role="navigation" id="navigation" className="list">
            <Link to="/" className="item -link">
              Home
            </Link>
            <Link to="/faq" className="item -link">
              FAQs
            </Link>
            <Link to="/graph" className="item -link">
              View the Graph
            </Link>
            <Link to="/contact_us" className="item -link">
              Contacts
            </Link>
            <Link to="/news" className="item -link">
              News
            </Link>
          </nav>
          <button
            data-collapse
            data-target="#navigation"
            className="toggle"
            onClick={this.collapseClickHandler}
          >
            <span className="icon"></span>
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
