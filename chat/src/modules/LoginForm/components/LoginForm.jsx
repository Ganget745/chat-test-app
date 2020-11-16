import React from 'react'
import { Form, Input } from 'antd'
import { Button, Block } from '../../../components'
import { Link } from 'react-router-dom'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { validateField } from '../../../utils/helpers'

const LoginForm = (props) => {
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
        <h2>Sign Up</h2>
        <p>Please enter your account</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item validateStatus={validateField('email', touched, errors)} hasFeedback>
            <Input
              id="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-Mail"
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" size="large">
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

export default LoginForm
