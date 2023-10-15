import React, { useState } from 'react';
import bannarPhoto from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className='container banner py-5'>
            <div className="row align-items-center my-5 pt-5">
                <div className="col-12 col-md-6">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate} />

                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={bannarPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;