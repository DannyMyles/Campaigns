import './login.css'
import Imlogo from "../../images/Imlogo.svg";
import { useContext, useState } from 'react';

// import {signIn} from "../../utilites/user"
interface LoginData{
  username:string,
  password:string
}

const Login = () => {

    let loginData:LoginData, setLoginData:any;
    // const { user, setUser } = useContext(UserContext);
    
    [loginData, setLoginData] = useState({
        username: "",
        password: ""
      });

      const [formError, setForError] = useState();
    
      function handleChange(evt:any){
        setLoginData({
          ...loginData,
          [evt.target.name]: evt.target.value
        });
      }
    
      function login(evt:any){
        evt.preventDefault();
        const form = evt.target;
        if(!form.checkValidity()){
          console.log();
          return;
        }
        setForError(undefined);
        /**
         * replace <login url> with login end point
         */
      //  signIn(loginData).then(user=>{
      //   // setUser(user);
      //  })
      }
    
      return (
        <div className="login-container">
          <div className="container">
          {/* first div */}
          <div className="left-container">
            <div className="left-inner">
              <div className="image-left">
                <img src={Imlogo} alt="logo-image" />
              </div>
              <div className="text-right">
                <p>
                  I&M Bank OTG <br /> Campaign Manager
                </p>
              </div>
            </div>
          </div>
    
          <div className="right-container">
            <form onSubmit={login}>
              {!formError && <div className="error">{formError}</div>}
              <div className='heading'>
              <h3>
                Kindly provide the <br /> details below to login:
              </h3>
              </div>
              <div className="input-box">
                <label htmlFor="password">Username</label>
                <input type="name" placeholder="Enter your username" required name="username" value={loginData.username} onChange={handleChange} />
              </div>
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" required name="password" value={loginData.password} onChange={handleChange} />
              </div>
              <div className="input-box">
                <button type="submit">Login</button>
              </div>
    
              <div className="input-forgot">
                <p>
                  <a href="#">Forgot your password?</a>
                </p>
              </div>
            </form>
              <div className="right-footer">
                <hr />
               <p>Want access to platform?<span>Request access</span></p>
              </div>
              <div className="footer-bottom">
                <p>©2021 I&M Bank, All rights reserved.</p>
              </div>
          </div>
        </div>
        </div>
        
      );
}

export default Login