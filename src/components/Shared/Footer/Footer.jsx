import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='py-5 '>
            <div className="row container mx-auto">
                <div className="col-12 col-md-4">
                    <h5>SERVICES</h5>
                    <li>Emergency Checkup</li>
                    <li>Monthly Checkup</li>
                    <li>Weekly Checkup</li>
                    <li>Deep Checkup</li>

                </div>
                <div className="col-12 col-md-4">
                    <h5 className='mt-5 mt-md-0'>ORAL HEALTH</h5>
                    <li>Emergency Checkup</li>
                    <li>Monthly Checkup</li>
                    <li>Weekly Checkup</li>
                    <li>Deep Checkup</li>

                </div>
                <div className="col-12 col-md-4 ">
                    <h5 className='mt-5 mt-md-0'>OUR ADDRESS</h5>
                    <li>New York - 101010 Hudson</li>

                </div>
            </div>

            <p className='text-center mt-5'>Copyright 2022 All Rights Reserved</p>

        </footer>
    );
};

export default Footer;