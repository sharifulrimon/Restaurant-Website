import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import logo from '../../Image/logo2.png';
import '../Signup/SignUp.css';
import { useContext } from 'react';
import { userContext } from '../../App';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const Login = () => {

  const [user, setUser]=useState({
    name:'',
    email:'',
    password:'',
    error:'',
    success: false,
  
  });
  const [loggedinUser,setLoggedinUser]= useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleChange=(event)=>{
    let  isEmailValid= true;
  if(event.target.name === 'email'){
    isEmailValid= /^\S+@\S+\.\S+$/.test(event.target.value);
   
  }
  if(event.target.name === 'password'){
    isEmailValid= event.target.value.length>6;


 }
 if(isEmailValid){
   const newUserInfo={...user};
   newUserInfo[event.target.name]= event.target.value;
   setUser(newUserInfo)
 }
 }

 const handleSubmit=(e, redirect)=>{
  if( user.email && user.password){
    console.log('clicked');
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((res) => {
  const newUserInfo={...user};
  newUserInfo.error='';
  newUserInfo.name=
  newUserInfo.success=true;
  setUser(newUserInfo);

  setLoggedinUser(newUserInfo);

    history.replace(from);

  
  
    })
    .catch((error) => {
    const newUserInfo= {...user};
    newUserInfo.error= error.message;
    newUserInfo.success=false;
     
      setUser(newUserInfo);
      // ..
    });
  
  }
  
  e.preventDefault();
 }
 

    return (
        <div className="sign-up">
        
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                         <img src={logo} alt=""/>
                    </Link>
                </div>
              
                
               
            <div className="row">
         
            <form  className="py-5" onSubmit={handleSubmit}>
                   
               
                     
               
                    <div className="form-group">
                        <input name="email" onBlur={handleChange}crequired className="form-control"   placeholder="Email"/>
                        
                    </div>
                    <div className="form-group"> 
                        <input type="password" onBlur={handleChange} required name="password"  className="form-control"  placeholder="Password" />
                        
                    </div>
                   
                    <div className="form-group">
                        <button className="btn btn-danger btn-block"  type="submit">Sign in</button>
                    </div>

                    <div className="option text-center">
                        <Link to="/signup" >Don't Have Account?</Link>
                    </div>
                    <p style={{color: 'red'}}>{user.error}</p>
                    {user.success &&   <p style={{color:'green',textAlign:'center'}}>User Signin Successfully</p>}
                    
         


                </form>
          
            
          
       


                </div>
               
            </div>

        </div>
    );
};

export default Login;