import React from 'react';
import { useState, useEffect } from 'react';
 
function Contactus() {
  const initialValues = { username: '', email: '', password: '', cPassword:'' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
 
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      localStorage.setItem('formValues', JSON.stringify(formValues));
 
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(formValues),
      };
      fetch('https://reqres.in/api/posts', requestOptions)
        .then((response) => response.json())
        
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Full name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    if  (!values.cPassword){
      errors.cPassword = 'Confirm Password is requied';
    }else if(values.password != values.cPassword){
      errors.cPassword ='Passwords must match';
    }
    return errors;
  };
 
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <></>
      )}
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Full name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter full name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
              value={formValues.cPassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.cPassword}</p>
          <button className="submit" type="submit">
            Sign Up
          </button>
        </div>
        <div className="alreadyone">
          Already registered &nbsp;<a href="#">Sign in?</a>
        </div>
        
      </form>
    </div>
  );
}
 
export default Contactus;
 

