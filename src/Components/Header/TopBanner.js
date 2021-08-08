import React from 'react';
import "../Styles/Topbanner.css";

const TopBanner = () => {
    return (
        <div>
            	<section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1>Best Food Waiting  for your Belly</h1>
                
                <div className="search-box col-md-6 my-5 mx-auto">
                    <input type="text" className="form-control" placeholder="Search Food Item" />
                    <button className="btn btn-danger search-btn ">Search</button>
                </div>
            </div>
        </section>
        </div>
    );
};

export default TopBanner;