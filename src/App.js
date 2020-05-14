import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainWebContainer from "./containers/MainWebContainer";
import AdminContainer from "./containers/AdminContainer";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <Router>
        <div>
          <Router>
            <Switch>
              <Route path={["/admingraph", "/adminnews", "/adminlogin"]}>
                <AdminContainer {...this.props} />
              </Route>
              <Route>
                <MainWebContainer />
              </Route>
            </Switch>
          </Router>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
