import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import validate from '../../common/validate';
import validationSchema from './ValidationSchema';

const initialValues = {
  login: '',
  email: '',
  password: ''
};

export default function SignUpFormContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
      render={SignUpForm}
    />
  );
}

function SignUpForm(props) {
  const { isSubmitting, errors, handleChange } = props;

  return (
    <Form className='form'>
      <label className='form-field' htmlFor='login'>
        <span>Login:</span>
        <input name='login' type='text' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.login}</div>

      <label className='form-field' htmlFor='email'>
        <span>Email:</span>
        <input name='email' type='email' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.email}</div>

      <label className='form-field' htmlFor='password'>
        <span>Password:</span>
        <input name='password' type='password' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.password}</div>

      <Button type="submit" variant="contained" color="primary">{isSubmitting ? 'Loading' : 'Sign Up'}</Button>
    </Form>
  );
}

function onSubmit(values, { setSubmitting, setErrors }) {
  setTimeout(() => {
    console.log('User has been sucessfully saved!', values);
    setSubmitting(false);
  }, 2000);
  
  axios.post('http://localhost:3002/users', {...values})
  .then(res => {
    console.log(res);
  });
}
