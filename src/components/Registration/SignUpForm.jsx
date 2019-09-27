import React from 'react';
import { Formik, Form } from 'formik';
import validate from '../../common/validate';
import validationSchema from './ValidationSchema';
import axios from 'axios';

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

      {/* <label className='form-field' htmlFor='passwordConfirmation'>
        <span>Confirm password:</span>
        <input
          name='passwordConfirmation'
          type='password'
          onChange={handleChange}
        />
      </label>
      <div className='form-field-error'>{errors.passwordConfirmation}</div>

      <label className='form-field' htmlFor='consent'>
        <span>Consent:</span>
        <input name='consent' type='checkbox' onChange={handleChange} />
      </label>
      <div className='form-field-error'>{errors.consent}</div> */}

      <button type='submit'>{isSubmitting ? 'Loading' : 'Sign Up'}</button>
    </Form>
  );
}

function onSubmit(values, { setSubmitting, setErrors }) {
  setTimeout(() => {
    console.log('User has been sucessfully saved!', values);
    setSubmitting(false);
  }, 2000);

  // fetch('http://localhost:3002/users')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });
  axios.post('http://localhost:3002/users', {...values})
  .then(res => {
    console.log(res);
  });
  // axios({
  //   method: 'POST',
  //   url: 'http://localhost:3002/users',
  //   data: { ...values },
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //   }
  // }).then(res => {
  //   console.log(res);
  // });
}
