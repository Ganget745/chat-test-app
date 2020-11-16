import React from 'react'
import { Form, Input } from 'antd'
import { Button, Block } from '../../../components'
import { Link } from 'react-router-dom'

import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { validateField } from '../../../utils/helpers'

const success = false

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid } = props
  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>You may register fro Sign In</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item validateStatus={validateField('email', touched, errors)} hasFeedback>
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
            <Form.Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="text"
                placeholder="Nick-name"
                size="large"
              />
            </Form.Item>
            <Form.Item validateStatus={validateField('password', touched, errors)} hasFeedback>
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
            <Form.Item validateStatus={validateField('password', touched, errors)} hasFeedback>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password2"
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
