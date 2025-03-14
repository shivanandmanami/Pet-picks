import React,{useEffect} from 'react';
import '../css/login.css'; // Make sure to import your CSS file
import { FacebookFilled, FacebookOutlined, GoogleCircleFilled, LinkedinFilled, TwitchFilled, TwitterCircleFilled } from '@ant-design/icons';

import dog1 from '../assets/images/undraw_dog_walking_re_l61p.svg'
import dog2 from '../assets/images/undraw_passing_by_0un9.svg'
const Login = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    const handleSignUpClick = () => {
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      container.classList.remove("sign-up-mode");
    };

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);

    // Clean up event listeners when component unmounts
    return () => {
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
    };
  }, []); 

  return (
    <div className="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i ><FacebookFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"><TwitterCircleFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"><GoogleCircleFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"><LinkedinFilled/></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"><FacebookFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"><TwitterCircleFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"><GoogleCircleFilled/></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"><LinkedinFilled/></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
        <div class="content">
            <h3>New here?</h3>
            <p>
              Pet-picks is a  platform that connects pet owners to reputable and experienced pet sitting services.<br/>
              If you are not  a member, please sign up.  
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
        </div>
        <img src={dog2} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
            Pet-picks is a  platform that connects pet owners to reputable and experienced pet sitting services.<br/>
            If you already have an account, please log in below.
            </p>
        <button class="btn transparent" id="sign-in-btn" >
              Sign in
            </button>
          </div>
          <img src={dog1} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
