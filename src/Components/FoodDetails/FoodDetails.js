import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShoppingCart, FaPlus, FaMinus, FaAngleRight, FaAngleLeft } from 'react-icons/fa';


import food from '../../fakeData/data';
import './FoodDetails.css'

const FoodDetails = (props) => {
    const [selectedBigImg, setSelectedBigImg] = useState(null)
   
    const [isSuccess, setIsSuccess] = useState(false);
    const {id} = useParams();
   
   
    const currentFood =  food.filter(food => food.id == id)
    
    const [quantity, setQuantity] = useState(1);
  
       
 const{name,images,price,fullDescription}= currentFood[0];
 const finalCartHandler = (currentFood) => {
    currentFood[0].quantity = quantity;
    props.cartHandler(currentFood[0]);
    setIsSuccess(true);
}

console.log(currentFood);
console.log(quantity);
 

    return (
        <div className="food-details my-5 pt-5 container">
    
        
        <div className="row">
            <div className="col-md-6 pr-md-4">
                <h1>{name}</h1>
                <p className="my-5">{fullDescription}</p>
                <div className="d-flex  my-4">
                    <h2 className="price">${price.toFixed(2)}</h2>
                    <div className="cart-controller ml-3 btn">
                            <button className="btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                    
                </div>
                <div className="action d-flex align-items-center">
                        <button className="btn btn-danger btn-rounded mb-2" onClick={() => finalCartHandler(currentFood)}><FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
                        {isSuccess &&
                         <p className="ml-3 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle} />  Item added to Cart</p>
                         
                        }
                    </div>
                    

              </div>
              <div className="col-md-6">
                    <img className="img-fluid" src={images} alt=""/>
                </div>
</div>
          
          </div>

  
     

          
      
    );
};

export default FoodDetails;