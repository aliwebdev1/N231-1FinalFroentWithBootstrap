import React from 'react';

const Doctor = ({ doctor }) => {
    const { image, name, email } = doctor;
    return (
        <div className="col text-center">
            <div className="card p-3 ">
                <div>
                    <img className='' src={`data:image/png;base64,${image}`} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title py-3">Name: {name}</h5>
                    <p className="card-text">Contact: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;