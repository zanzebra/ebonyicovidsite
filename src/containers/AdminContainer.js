import React from "react";
import { Switch, Route } from "react-router-dom";
import "../Admin.css";
import LeftBar from "../adminComponent/LeftBar";
import NewsPageContent from "../adminComponent/NewsPageContent";
import GraphPageContent from "../adminComponent/GraphPageContent";
import AdminLogin from "../adminComponent/AdminLogin";
import PleaseLogin from "../adminComponent/PleaseLogin";
import YouAreLoggedIn from "../adminComponent/YouAreLoggedIn";

class MainWebContainer extends React.Component {
  render() {
    return (
      <div className="admin-content">
        <div className="task-manager">
          {this.props.isAuthenticated ? <LeftBar /> : null}

          <Switch>
            {this.props.isAuthenticated ? (
              <Route path="/adminlogin/" exact component={YouAreLoggedIn} />
            ) : (
              <Route path="/adminlogin/" exact component={AdminLogin} />
            )}

            {this.props.isAuthenticated ? (
              <Route path="/admingraph/" component={GraphPageContent} />
            ) : (
              <Route path="/admingraph/" component={PleaseLogin} />
            )}
            {this.props.isAuthenticated ? (
              <Route path="/adminnews/" component={NewsPageContent} />
            ) : (
              <Route path="/adminnews/" component={PleaseLogin} />
            )}
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainWebContainer;
