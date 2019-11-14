import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import wretcher from 'wretch';
import './styles.css'


class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      wretcher('http://localhost:8000/api/login')
        .post(values).json()
        .then( res => {
          localStorage.setItem('user',JSON.stringify(res.data))
          console.log(res)
          this.props.history.push('/')
        })
        .catch(console.error) 
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center--container">
        <Form onSubmit={this.handleSubmit} className="login-form box--border">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link to='/register' className="login-form-forgot">
              Forgot password
            </Link>
            <br />
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <span style={{margin: 5}}/> Or <Link to='/register'> register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const WrappedLogin = withRouter(Form.create({ name: 'login' })(Login))
