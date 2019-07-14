export const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }

  if (!values.surname) {
    errors.surname = 'Surname is required';
  }

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username is too short';
  } else if (values.username.length > 10) {
    errors.username = 'Username is too long';
  }

  return errors;
};