import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import validate from '../../common/validate';
import validationSchema from './ValidationSchema';

const initialValues = {
  email: '',
  password: ''
};

export default function LoginFormContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
      render={LoginForm}
    />
  );
}

function LoginForm(props) {
  const { isSubmitting, errors, handleChange, handleSubmit } = props;

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='form-field' htmlFor='email'>
        <span>Email:</span>
        <input name='email' type='text' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.email}</div>

      <label className='form-field' htmlFor='password'>
        <span>Password:</span>
        <input name='password' type='password' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.password}</div>

      <Button type='submit' variant='contained' color='primary'>
        {isSubmitting ? 'Loading' : 'Login'}
      </Button>
    </form>
  );
}

function onSubmit(values, { setSubmitting, setErrors }) {
  setTimeout(() => {
    console.log('User has been sucessfully logged in!', values);
    setSubmitting(false);
  }, 2000);

  axios.post('http://localhost:3002/users', {...values})
  .then(res => {
    console.log(res);
  });
}
