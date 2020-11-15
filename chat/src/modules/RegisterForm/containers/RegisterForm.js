import { withFormik } from 'formik'
import RegisterForm from '../components/RegisterForm'

export default withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validate: (values) => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Input password'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, and a number'
    }

    return errors
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'RegisterForm'
})(RegisterForm)
