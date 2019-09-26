import * as Yup from 'yup';
import { MIN_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MAX_LOGIN_LENGTH } from '../../common/constants';

export default function validationSchema(values) {
  return Yup.object().shape({
    login: Yup.string()
      .min(MIN_LOGIN_LENGTH, `Password has to be longer than ${MIN_LOGIN_LENGTH} characters!`)
      .max(MAX_LOGIN_LENGTH, `Password has to be less than ${MAX_LOGIN_LENGTH} characters!`)
      .required('Login is required!'),
    email: Yup.string()
      .email('Email is not valid!')
      .required('Email is required!'),
    password: Yup.string()
      .min(
        MIN_PASSWORD_LENGTH,
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
      )
      .required('Password is required!'),
    passwordConfirmation: Yup.string()
      .oneOf([values.password], 'Passwords are not the same!')
      .required('Password confirmation is required!'),
    consent: Yup.bool()
      .test(
        'consent',
        'You have to agree with our Terms and Conditions!',
        value => value === true
      )
      .required('You have to agree with our Terms and Conditions!')
  });
}
