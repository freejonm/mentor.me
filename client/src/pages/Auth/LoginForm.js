import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { Container, Row, Col } from '../../components/Grid';
// import { Card } from '../../components/Card';
// import { Input, FormBtn } from '../../components/Form';
import './index.scss';

function LoginForm({login}) {
  const [userObject, setUserObject] = useState({
    username: '',
    password: ''
  });
  const [redirectTo, setRedirectTo] = useState(null);

	const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userObject.username, userObject.password);
		setRedirectTo('/');
	};

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  } else {
    return (
      <section className="container">
        <section className="row">
          <section className="col-md-3"></section>
          <section className="col-md-6">
            <section className="card" title="Login to React Reading List">
              <form style={{marginTop: 10}}>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={userObject.username}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                />
                <a href="/signup">Register</a>
                <button onClick={handleSubmit}>Login</button>
              </form>
            </section>
          </section>
          <section className="col-md-3"></section>
        </section>
      </section>
    )
  }
}

export default LoginForm;
