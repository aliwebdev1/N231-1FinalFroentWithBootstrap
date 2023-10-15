import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, address } = review;
    return (
        <div className="col ">
            <div className="card p-3 ">
                <div>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body d-flex align-items-center">
                    <img className='reviews' src={img} alt="card info" />
                    <div className='ms-3'>
                        <h5 className="card-title">{name}</h5>
                        <p>{address}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;