import Validator from 'Validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
  let errors = {}

  if (Validator.isNull(data.name)) errors.name = 'Name field is required'
  if (Validator.isNull(data.email)) errors.email = 'Email field is required'
  if (Validator.isNull(data.name)) errors.username = 'Username field is required'
  if (Validator.isNull(data.name)) errors.password = 'Password field is required'

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
