import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ExceptionalDental = () => {
    return (
        <div className='container pb-5'>
            <div className="row align-items-center justify-content-between my-5 py-5">

                <div className="col-12 col-md-5">
                    <img className='img-fluid rounded' src={treatment} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h1>Exceptional Dental Care, on Your Terms</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='mb-5 mb-md-0 btn-primari bg-primari'>GET STARTED</button>
                </div>

            </div>

        </div>
    );
};

export default ExceptionalDental;