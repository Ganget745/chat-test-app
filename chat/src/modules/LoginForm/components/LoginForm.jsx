import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { Button, Block } from '../../../components'
import { Link } from 'react-router-dom'

import { UserOutlined, LockOutlined } from '@ant-design/icons'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Sign Up</h2>
          <p>Please enter your account</p>
        </div>
        <Block>
          <Form>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
                LOG IN
              </Button>
            </Form.Item>
            <Link className="auth register-link" to="/register">
              Registr now
            </Link>
          </Form>
        </Block>
      </div>
    )
  }
}

export default LoginForm
