import React from "react";
import { Form, Input, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

class AdminLogin extends React.Component {
  onFinish = (values) => {
    this.props.onAuth(values.username, values.password);
  };
  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = this.props.error.message;
    }
    return (
      <div className="page-content">
        {this.props.loading ? (
          <div className="admin-form">
            <Spin className="spin-adjust" size="large" color="#fc4949" />
          </div>
        ) : (
          <div className="admin-form">
            {errorMessage}
            <h5>Login</h5>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <input type="submit" value="Submit" id="input-submit-button" />
            </Form>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
