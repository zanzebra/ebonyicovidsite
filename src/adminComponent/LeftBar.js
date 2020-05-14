import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt,
  faChartBar,
  faNewspaper,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <div className="left-content">
          <ul className="action-list">
            <Link to="/">
              <li className="aitem">
                <FontAwesomeIcon icon={faHome} className="admin-icons" />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/admingraph">
              <li className="aitem">
                <FontAwesomeIcon icon={faChartBar} className="admin-icons" />
                <span>Graph</span>
              </li>
            </Link>
            <Link to="/adminnews">
              <li className="aitem">
                <FontAwesomeIcon icon={faNewspaper} className="admin-icons" />
                <span>News</span>
              </li>
            </Link>
            <Link to="/adminlogin">
              <li className="aitem">
                <FontAwesomeIcon icon={faSignInAlt} className="admin-icons" />
                <span>Login</span>
              </li>
            </Link>

            <li className="aitem" onClick={this.props.onLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="admin-icons" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(LeftBar);
