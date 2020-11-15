import React from 'react'
import { Form, Input } from 'antd'
import { Button, Block } from '../../../components'
import { Link } from 'react-router-dom'

import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'

const success = false

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props
  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>You may register fro Sign In</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-Mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="Nick-name"
              rules={[{ required: true, message: 'Please input your Nick-name!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="text"
                placeholder="Nick-name"
                size="large"
                value={values.email}
              />
            </Form.Item>
            <Form.Item
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              hasFeedback
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="confirm password"
              rules={[{ required: true, message: 'Please confirm your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              {!isValid && <span>Error!!!</span>}
              <Button onClick={handleSubmit} type="primary" size="large">
                REGISTER
              </Button>
            </Form.Item>
            <Link className="auth register-link" to="/login">
              Sing In
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: '48px', color: '#08c' }} />
            </div>
            <h2>Confirm your account</h2>
            <p>An email has been sent to you with a link to verify your account</p>
          </div>
        )}
      </Block>
    </div>
  )
}
export default RegisterForm
