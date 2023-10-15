import React from 'react';
import { useQuery } from 'react-query';
import Doctor from './Doctor';

const Doctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/doctors')
            const data = await res.json()
            return data;
        },

    })


    return (
        <div className='my-5 py-5'>

            <div className='text-center'>
                <h5 className='text-primari'>OUR DOCTORS</h5>
                <h2>Best Service Provider</h2>
            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4 mx-4">

                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>

        </div>
    );
};

export default Doctors;