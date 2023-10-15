import React from 'react';
import './infoCard.css'
const InfoCard = ({ card }) => {
    const { name, bgClass, icon, description } = card;
    return (
        <div className="col">
            <div className={`single-items p-4 text-white d-flex align-items-center ${bgClass}`}>
                <div>
                    <img className='me-3' src={icon} className="" alt="card info" />
                </div>
                <div className="card-body">
                    <h5 className="card-title py-3">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default InfoCard;