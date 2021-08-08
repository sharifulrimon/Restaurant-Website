import React from 'react';
import {Link} from 'react-router-dom';
import { CardBox } from '../Styles/StyleMenu';
const FoodItem = (props) => {
    const {id,name,shortDescription,price,images} = props.food;
    return (
        <CardBox className="col-md-4 mb-4 card-box">
            <Link to={"food/"+id}>
            <div className="card">
                <div className="card-body text-center">
                    <img src={images} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <h4>${price.toFixed(2)}</h4>
                    </div>
                </div>
                </div>
            </Link>
        </CardBox>
    );
};

export default FoodItem;