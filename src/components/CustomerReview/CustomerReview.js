import React from 'react';
import './CustomerReview.css'

const CustomerReview = ({review}) => {
    const {name, rating, picture, revewText} = review;
    return (
        <div className='review-card'>
            <div className='d-flex align-items-center'>
                <img className='card-img img-fluid' src={picture} alt=""/>
                <h3>{name}</h3>
            </div>
            <div className='card-content mt-4'>
                <h6 className='text-info'> Rating: {rating} </h6>
                <p>{revewText}</p>
            </div>
        </div>
  
     
    );
};

export default CustomerReview;