import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const sevices = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]

    return (
        <div className='my-5 py-5'>

            <div className='text-center'>
                <h5 className='text-primari'>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4 mx-4">

                {
                    sevices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;