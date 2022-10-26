import React, {useState, useEffect} from 'react';
import Header from '../../components/header/header';
// import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
// import Link from "next/link";
function SignUp() {
  // Declaring the initials
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // handle user registration
  function handleSubmit(e) {
    e.preventDefault();
    // check matching password
    if (password !== passwordConfirm) {
      // if  sign up failed
      let misMatchAlert = Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Passwords don\'t match',
      });
      // after alert reload page
      misMatchAlert.then(function() {
        window.location = '/signup';
      });
      return;
    }
    // send data to server
    fetch('http://127.0.0.1:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }).then((response) => response.json()).then((data) => {
      console.log(data);
      // if account created successfully
      let successAlert = new Swal({
        title: 'Success!',
        text: 'User saved successfully!',
        type: 'success',
      });
      // after successful sign up then login
      successAlert.then(function() {
        window.location = '/login';
      });
    }).catch((err) => {
      console.log(err);
      // if  sign up failed
      let failAlert = new Swal({
        title: 'Oops!',
        text: 'User not saved!',
        type: 'error',
      });
      // after alert reload page
      failAlert.then(function() {
        window.location = '/signup';
      });
    });
  }

  return (
      <>
        <Header/>
        <div className="form-main-container">
          <div className="form-wrapper">
            <div className="form-header">
				<span className="form-title">
					Sign up to <strong>Build Con</strong>
				</span>
            </div>

            <form className="form-content">
              <div className="input-wrapper">
                <input className="input-style" type="text" name="username"
                       placeholder="Username" required/>
                <span className="input-style-focus"></span>
              </div>
              <div className="input-wrapper">
                <input className="input-style" type="email" name="email"
                       placeholder="Email" required/>
                <span className="input-style-focus"></span>
              </div>
              <div className="input-wrapper">
                <div className="input-group">
                  <input className="form-control" type="password"
                         placeholder="Password" id="password" required/>
                  <span className="form-control-focus"></span>
                  <div className="input-group-addon"
                       onClick="passwordVisibility();">
                    <i className="fa fa-eye" id="showPass"></i>
                    <i className="fa fa-eye-slash d-none" id="hidePass"></i>
                  </div>
                </div>
              </div>

              <div className="input-wrapper">
                <input className="form-control" type="password"
                       placeholder="Repeat Password" id="repeatPassword"
                       required/>
                <span className="input-style-focus"></span>
              </div>

              <div className="checkbox-wrapper mt-4">
                <input type="checkbox" className="checkbox-style" id="checkbox"
                       name="remember-me" required/>
                <label className="label-checkbox-style" htmlFor="checkbox">
                  I agree with terms and conditions
                </label>
              </div>

              <button className="button-style w-100">
                Sign Up
              </button>

              <p className="txt-style1 mt-5">Already a member? <a
                  className="txt-style2" href="#"><strong>Sign In!</strong></a>
              </p>
            </form>
          </div>
        </div>
      </>
  );
}

export default SignUp;