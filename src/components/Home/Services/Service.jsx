import React from 'react';

const Service = ({ service }) => {
    const { name, icon, description } = service;
    return (
        <div className="col text-center">
            <div className="card p-3 ">
                <div>
                    <img src={icon} alt="card info" />
                </div>
                <div className="card-body">
                    <h5 className="card-title py-3">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;