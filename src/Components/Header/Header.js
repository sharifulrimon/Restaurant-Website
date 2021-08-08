import React, { useContext, useState } from 'react';
import logo2 from '../../Image/logo2.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'



import "../Styles/Header.css";
import { Link } from 'react-router-dom';
import { userContext } from '../../App';




const Header = (props) => {
    const [loggedinUser,setLoggedinUser]= useContext(userContext);


    return (
  
        <nav className="navbar navbar-expand-lg  navbar-light bg-white  ">
        <div  className="container">
           
       
				
					<Link className="navbar-brand " to="/">
						<img src={logo2} alt="logo" width="120" height="40"/>
					</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
				
                
					<ul className="navbar-nav align-items-center">
					<li className="nav-item active">
                        <Link to="/checkout" className="nav-link"><FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span className="badge bg-light">{props.cart.length}</span></Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedinUser.email ?  
                             <Link to="/checkout" className="nav-link">{loggedinUser.email}</Link> 
                             :
                             <Link to="/login" className="nav-link">Login</Link> 
                        }
                    </li>
                    <li className="nav-item">
                    {
                            loggedinUser.email ? 
                            <Link to="/" className="nav-link">
                                <button className="btn btn-danger btn-rounded " onClick={()=>setLoggedinUser({})}>Sign Out</button>
                            </Link>
                            :
                            <Link to="/signup" className="nav-link">
                                <button className="btn btn-danger btn-rounded">Sign Up</button>
                            </Link>
                        }
                       
                    </li>
					</ul>
				</div>
               
               
        
        </nav>
	
  
    );
};

export default Header;