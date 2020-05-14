import React from "react";

class YouAreLoggedIn extends React.Component {
  render() {
    return (
      <div className="page-content">
        <div className="admin-form">
          <div className="admin-div">
            <div class="admin-image">
              <img src="images/oops.jpg" />
            </div>
            <p>You cant access this page because you are Logged in</p>
          </div>
        </div>
      </div>
    );
  }
}

export default YouAreLoggedIn;
