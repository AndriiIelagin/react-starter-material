import React from 'react';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import validate from '../../common/validate';
import validationSchema from './ValidationSchema';
import Copyright from '../Copyright';
import { SIGN_IN_URL } from '../../common/constants';
import { useStyles } from './styles';

function onSubmit(values) {
  axios.post(SIGN_IN_URL, values).then(res => {
    console.log(res);
  });
}

const initialValues = {
  email: '',
  password: ''
};

export default function SignIn() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
      render={props => <SignInForm {...props} />}
    />
  );
}

function SignInForm(props) {
  const classes = useStyles();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name={'email'}
            autoComplete='email'
            autoFocus
            onChange={handleChange}
            value={values.email}
            error={errors.email}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name={'password'}
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleChange}
            value={values.password}
            error={errors.password}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSubmitting ? 'Loading' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
