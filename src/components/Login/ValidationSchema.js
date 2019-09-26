import * as Yup from 'yup';
import { MIN_PASSWORD_LENGTH } from '../../common/constants';

export default function validationSchema(values) {
  return Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid!')
      .required('Email is required!'),
    password: Yup.string()
      .min(
        MIN_PASSWORD_LENGTH,
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
      )
      .required('Password is required!'),
  });
}
