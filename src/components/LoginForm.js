import React from 'react';
import { func } from 'prop-types';

const LoginForm = props => (
  <div className="login-form">
    <h2>Please login to continue</h2>
    <form className="input-group" onSubmit={e => props.onFormSubmit(e)}>
      <input
        name="username"
        placeholder="Username"
        className="form-control"
      />
      <span>
        <button type="submit" className="btn">Login</button>
      </span>
    </form>
  </div>
);

LoginForm.propTypes = {
  onFormSubmit: func.isRequired,
};

export default LoginForm;
