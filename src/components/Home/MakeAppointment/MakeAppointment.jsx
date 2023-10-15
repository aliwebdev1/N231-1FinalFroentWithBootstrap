import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import './MakeAppintment.css'

const MakeAppointment = () => {
    return (
        <div className="make-appintment">
            <div className='container mx-3'>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img className='doctor-img img-fluid' src={doctor} alt="" />

                    </div>
                    <div className="col-12 col-md-6">
                        <h5 className='text-primari'>Appointment</h5>
                        <h1 className='text-white'>Make an appointment Today</h1>
                        <p className='text-white my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='mb-5 mb-md-0 btn-primari bg-primari'>GET STARTED</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeAppointment;