import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import { useQuery } from 'react-query';
import is from 'date-fns/esm/locale/is/index.js';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {

    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://final-server-it3x6jsvd-aliwebdev1.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='container-fluid my-5'>
            <div className='text-center'>
                <p className='text-primari'>Avaliable Service On: {format(selectedDate, 'PP')}</p>
                <p>Please select a service.</p>
            </div>

            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4 mx-4">

                {
                    appointmentOptions.map(option => <AppointmentOption
                        refetch={refetch}
                        key={option._id}
                        appointmentOption={option}
                        selectedDate={selectedDate}
                    ></AppointmentOption>)
                }
            </div>

        </div>
    );
};

export default AvailableAppointments;