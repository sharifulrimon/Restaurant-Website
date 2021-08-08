import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Foods.css'

import food from '../../fakeData/data';
import FoodItem from '../FoodItem/FoodItem';
import { BtnStyle } from '../Styles/StyleFoods';


const Foods = () => {

	
    const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");
	const selectedFoods =  food.filter(food => food.type == selectedFoodType)




	return (
		<section className="food-area my-5">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedFoodType("Breakfast")} className="nav-item">
                            <span  to="breakfast" className={selectedFoodType === "Breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("Lunch")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "Lunch" ?  "active nav-link" : "nav-link"}>Lunch</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("Dinner")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "Dinner" ?  "active nav-link" : "nav-link"}>Dinner</span>
                        </li>
                    </ul>
                </nav>

                <div className="row my-5">
                 
                    {
                        selectedFoods.map(food => <FoodItem key={food.id}  food={food} />)
                    }
                </div>
                <div className="text-center">
                   
                        <button disabled className="btn btn-secondary">Check Out Your Food</button>

                

                </div>
            </div>
        </section>
	);
};

export default Foods;