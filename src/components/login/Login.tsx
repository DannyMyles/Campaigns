import './login.css'
import Imlogo from "../../images/Imlogo.svg";
import { useState } from 'react';

interface LoginData{
  username:string,
  password:string
}

const Login = () => {

    let loginData:LoginData, setLoginData:any;
    
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
        evt.preventDefalt();
        const form = evt.taget;
        if(form.checkValidity()){
          console.log();
          return;
        }
        setForError(undefined);
        /**
         * replace <login url> with login end point
         */
        fetch('<login url>', {method:"POST", body:JSON.stringify(loginData), headers:{
          "Content-Type":"application/json"
        }}).then(response=>{
          // handle any error where response status is not 200
          if(response.status !== 200){
            throw new Error(response.statusText);
          }
          // when the request is successful
          return response.json();
        })
        .then(json=>{
          // save jwt token in the localstorage
          localStorage.setItem('token', json.jwt.token);
          window.location.href = '/profilepage' 
        })
        .catch(e=>{
          setForError(e.message);
        })
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
              <h3>
                Kindly provide the <br /> details below to login:
              </h3>
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
               <p>Want access to platform? <a href="#">Request access</a></p>
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