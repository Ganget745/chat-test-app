const validateForm = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Input your E-mail'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid E-mail address'
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Input password'
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth
          ? 'Invalid password'
          : 'Password must contain at least one uppercase letter, one lowercase letter, and a number'
      }
    }
  }

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]))
}

export default validateForm
