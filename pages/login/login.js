import React from 'react';
import Header from '../../components/header/header';


const Login = () => {
  return (
      <>
        <Header/>
        <div className="form-main-container">
          <div className="form-wrapper">
            <div className="form-header">
				<span className="form-title">
					Login to <strong>Your app name</strong>
				</span>
            </div>

            <form className="form-content">
              <div className="input-wrapper">
                <input className="input-style" type="text" name="username"
                       placeholder="Username" required/>
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

              <button className="button-style w-100">
                Login
              </button>

              <div className="checkbox-wrapper mt-4">
                <input type="checkbox" className="checkbox-style" id="checkbox"
                       name="remember-me"/>
                  <label className="label-checkbox-style" htmlFor="checkbox">
                    Remember me
                  </label>

                  <a href="#" className="txt-style2">
                    <strong>Forgot your password?</strong>
                  </a>
              </div>

              <p className="txt-style1 mt-5">Not a member yet? <a
                  className="txt-style2" href="#"><strong>Sign Up!</strong></a>
              </p>
            </form>
          </div>
        </div>
      </>
  );
};

export default Login;