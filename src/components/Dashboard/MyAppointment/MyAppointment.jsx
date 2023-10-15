import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)

    const url = `https://final-server-it3x6jsvd-aliwebdev1.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        },
    })

    return (
        <div className=''>
            <h3 className='my-3'> My Appointment</h3>
            <div className='vh-100'>
                <table className="table">
                    <thead className='bg-secondary-subtle'>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Treatment</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map((booking, i) => <tr
                                key={booking._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;