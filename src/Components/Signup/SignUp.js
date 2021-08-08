import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import logo from '../../Image/logo2.png';
import './SignUp.css';
import { useContext } from 'react';
import { userContext } from '../../App';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const SignUp = () => {

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
    console.log(isEmailValid);
  }
  else if(event.target.name === 'password'){
    isEmailValid= event.target.value.length>5;
   


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
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res) => {
  const newUserInfo={...user};
  newUserInfo.error='';
  newUserInfo.success=true;
  updateUserName(user.name)
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
 const updateUserName = name =>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
    console.log('user name updated successfully')
  }).catch(function(error) {
    console.log(error)
  });
} 


    return (
        <div className="sign-up">
        
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                         <img src={logo} alt=""/>
                    </Link>
                </div>
              
                
                {/* <input type="checkbox" onChange={()=> setNewUSer(!newUser)} name="newUser" id="" /> */}
            <div className="row">
         
            <form  className="py-5" onSubmit={handleSubmit}>
                   
               
                     
                    <div className="form-group">
                        <input name="name" type="text" onBlur={handleChange} required className="form-control" placeholder="Name" />
                
                    </div>
                    <div className="form-group">
                        <input name="email" onBlur={handleChange}crequired className="form-control"   placeholder="Email"/>
                        
                    </div>
                    <div className="form-group"> 
                        <input type="password" onBlur={handleChange} required name="password"  className="form-control"  placeholder="Password" />
                        
                    </div>
                    <div className="form-group">
                        <input type="password" onBlur={handleChange}  name="confirm_password" className="form-control" 
                        placeholder="Confirm Password" required />
                      
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-block"  type="submit">Sign Up</button>
                    </div>

                    <div className="option text-center">
                        <Link to="/login" >Already Have an Account?</Link>
                    </div>
                    {user.success &&   <p style={{color:'green',textAlign:'center'}}>User Created Successfully</p>}
                    
         


                </form>
          
                {/* <div className="col6">
                <form  className="py-5" onSubmit={SigninSubmit} >

                <div className="form-group">
                        <input name="email" required className="form-control" onBlur={handleChange}   placeholder="Email"/>
                        
                    </div>
                    <div className="form-group">
                        <input type="password"  required name="password" onBlur={handleChange}   className="form-control"  placeholder="Password" />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-block"  type="submit">Login</button>
         
                        <br />
                        <button className="btn btn-Light bg-light btn-block"  >Sign in with google</button>
                <button className="btn btn-Light btn-block bg-light " >Sign in with facebook</button>
                    </div>
 
</form>

                </div> */}
       


                </div>
               
            </div>

        </div>
    );
};

export default SignUp;