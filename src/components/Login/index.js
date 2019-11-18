import React from "react";
import { Form, Icon, Input, Button, Checkbox, Typography } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import wretcher from "wretch";
import "./styles.css";

const { Title } = Typography;

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      wretcher(`${process.env.REACT_APP_API_URL}/api/login`)
        .accept("application/json")
        .post(values)
        .json(res => {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res);
          this.props.history.push("/dashboard");
        })
        .catch(console.error);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <div className="center--container" style={{ flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <Title style={{ color: "black" }}>Workeezy</Title>
            </Link>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form box--border">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <Link to="/register" className="login-form-forgot">
                Forgot password
              </Link>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <span style={{ margin: 5 }} /> Or{" "}
              <Link to="/register">
                <span style={{ color: "#a2b4f9" }}>register now! </span>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}

export const WrappedLogin = withRouter(Form.create({ name: "login" })(Login));
