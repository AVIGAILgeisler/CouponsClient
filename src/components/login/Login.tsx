import React from 'react';
import { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  
  const navigate=useNavigate();
  const onLoginClicked = async () => {
    try{
        const response = await axios.post("http://localhost:8080/users/login", { userName, password });
        const serverResponse = response.data;
        let token = 'Bearer ' + serverResponse;
        axios.defaults.headers.common['Authorization'] = token;
        localStorage.setItem('token', token);
  
        navigate ('/coupons');
    }
    catch(error: any){
        alert(error.message);
    }
  }
  
    return (
      <div className="/">
       <input type="text" placeholder="user name" onChange={event => setUserName(event.target.value)}/>
       <br></br>
       <input type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
       <br></br>
       <button id="button" onClick={onLoginClicked}>Login</button>
      </div>
    );
  }
  
  export default Login;