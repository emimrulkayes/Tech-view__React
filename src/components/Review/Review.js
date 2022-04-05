import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='my-5'> <strong>WHAT OUR CUSTOMERS SAY</strong></h2>
                <div className='review-container text-start'>
                    {
                        reviews.map(review => <CustomerReview
                            key={review.id}
                            review = {review}
                        ></CustomerReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;