import React from 'react'
import { Link } from 'react-router-dom'
import index from '../index.css'

function Login() {
  return (
    <div className="container">
        <div className="forms">
            <div className="form login">
                <span className="title">Login</span>

                <form action="#">
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" required />
                        <i className="uil uil-envelope icon" />
                    </div>
                    <div classclassName="input-field">
                        <input type="password" class="password" placeholder="Enter your password" required />
                        <i className="uil uil-lock icon" />
                        <i className="uil uil-eye-slash showHidePw" />
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck" />
                            <label for="logCheck" className="text">Remember me</label>
                        </div>
                        
                        <Link to="#" className="text">Forgot password?</Link>
                    </div>

                    <div className="input-field button">
                        <input type="button" value="Login" />
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Not a member?
                        <Link to="#" className="text signup-link">Signup Now</Link>
                    </span>
                </div>
            </div>

             {/* -- Registration Form -- */}

            <div className="form signup">
                <span className="title">Registration</span>

                <form action="#">
                    <div className="input-field">
                        <input type="text" placeholder="Enter your name" required />
                        <i className="uil uil-user" />
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" required />
                        <i className="uil uil-envelope icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" placeholder="Create a password" required />
                        <i className="uil uil-lock icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" placeholder="Confirm a password" required />
                        <i className="uil uil-lock icon" />
                        <i className="uil uil-eye-slash showHidePw" />
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="termCon" />
                            <label for="termCon" className="text">I accepted all terms and conditions</label>
                        </div>
                    </div>

                    <div className="input-field button">
                        <input type="button" value="Signup" />
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Already a member?
                        <Link to="#" className="text login-link">Login Now</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>


  )
  
}

export default Login
