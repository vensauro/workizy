import React from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Row,
  Col,
  Checkbox,
  Button,
  message,
  Typography,
} from 'antd';
import wretcher from 'wretch';
import { withRouter, Link } from 'react-router-dom'

const { Title } = Typography;

class Register extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      wretcher('http://127.0.0.1:8000/api/register')
      .post(values).json()
      .then(console.log)
      .then(() => {        
        message.info(JSON.stringify(values))
      })
      .then(() => {
        this.props.history.push('/')
      })
      .catch(console.error)      
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className="center--container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <Link to="/">
            <Title style={{ color: "black" }}>Workeezy</Title>
          </Link>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="box--border">
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'E-mail invalido!',
                },
                {
                  required: true,
                  message: 'Não esqueça seu E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Cargo">
            {getFieldDecorator('cargo', {
              rules: [
                {
                  required: true,
                  message: 'Não esqueça seu cargo!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Não esqueça sua senha!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'confirme sua senha!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Não esqueça seu nome!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="https://stackoverflow.com/questions/28344550/how-to-handle-datetime-between-php-laravel-api-and-javascript-angularjs">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


export const WrappedRegister = withRouter(Form.create({ name: 'register' })(Register))
