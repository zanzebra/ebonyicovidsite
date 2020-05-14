import React from "react";

class PleaseLogin extends React.Component {
  render() {
    return (
      <div className="page-content">
        <div className="admin-form">
          <div className="admin-div">
            <div class="admin-image">
              <img src="images/oops.jpg" />
            </div>
            <p>You have no business here. If you do please Login for access</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PleaseLogin;
