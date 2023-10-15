import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import testmonial from '../../../assets/icons/quote.svg';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
        },
        {
            id: 2,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
        },
        {
            id: 3,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
        },

    ]

    return (
        <div className='container my-5 py-5'>

            <div className='d-flex justify-content-between'>
                <div>
                    <h5 className='text-primari'>Testimonial</h5>
                    <h2>What Our Patients Says</h2>

                </div>
                <img className='testmonial' src={testmonial} alt="" />
            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4">

                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>

        </div>
    );
};

export default Reviews;