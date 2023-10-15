import React from 'react';
import bannarPhoto from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container banner py-5'>
            <div className="row align-items-center my-5 py-5">
                <div className="col-12 col-md-6">
                    <h1>Your New Smile Starts Here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='mb-5 mb-md-0 btn-primari bg-primari'>GET STARTED</button>
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={bannarPhoto} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;