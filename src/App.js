import React, { Component } from 'react';
import { SubmissionError } from "redux-form"; // used to differentiate IO errors from validation errors

import RegisterForm from './components/RegisterForm';

// In the real world, we would query our database, but for
// the sake of this example, we'll mark some already-taken user names.
const takenUsernames = ['kent', 'andy', 'john', 'joel'];

class RegisterFormContainer extends Component {
  submit = values => {
    if (takenUsernames.includes(values.username)) {
      throw new SubmissionError({
        username: 'Username already taken',
      })

    } else {
      window.alert(JSON.stringify(values, null, 4))
    }
  };

  getInitialValues() {
    return {
      preference: 'spaces',
      newsletter: true,
    }
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    )
  }
}

export default RegisterFormContainer;
