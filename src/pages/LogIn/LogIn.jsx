import React from "react";
import './LogIn.css'
import logo from '../../components/Logo/logo-alt.png';

function LogIn() {
    return ( 
        <div className="wrapper">

            <div className="log-in">
                <img className="logo" src={logo} alt="logo"></img>
    
                <form action="" method="post" className="form" id="form-1">
                    <h3 className="heading">Welcome back</h3>
                    <p className="desc">
                        Please log into your account
                    </p>
    
                    <div className="spacer"></div>
    
                    <div className="form-group">
                        <label for="mail" className="form-label">Email</label>
                        <input id="mail" name="mail" type="text" placeholder="VD: NguyenA@gmail.com" className="form-control" />
                        <span className="form-message"></span>
                    </div>
    
                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" placeholder="Password" className="form-control" />
                        <span className="form-message"></span>
                    </div>

                    <div className="form-report">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span className="slider-remem">Remember Me</span>
                        <a href="#!" className="forget-pass">Forget password?</a>
                    </div>
    
                    <button className="form-submit">Login</button>

                    <span className="form-options"><hr className="log-hr"/>Or log in with<hr className="log-hr"/></span>

                    <div className="form-option-group">
                        <button className="form-option">Facebook</button>
                        <button className="form-option">Google</button>
                        <button className="form-option">Firebase</button>
                        <button className="form-option">Twiter</button>
                    </div>

                    <span className="form-regis">Don't Have An Account? <a href="#!">Registration</a></span>

                </form>
            </div>

            <div>
                <img className="image" src={logo} alt="logo"></img>
            </div>
        </div>
    );
}

export default LogIn;