import React from 'react';
import { useQuery } from 'react-query';
import './ManageDoctors.css'
import toast from 'react-hot-toast';

const ManageDoctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/doctors')
            const data = await res.json()
            return data;
        },

    })

    const handleDeleteDoctor = (doctor) => {
        fetch(`https://final-server-it3x6jsvd-aliwebdev1.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${doctor.name} deleted successfull`)
                    refetch()
                }
            })


    }


    return (
        <div className=''>
            <h3 className='my-3'>Manage Doctors</h3>
            <div className='vh-100'>
                <table className="table">
                    <thead className='bg-secondary-subtle'>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Avater</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Specilty</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr
                                key={doctor._id}>
                                <th scope="row">{i + 1}</th>
                                <th>
                                    {/* <img className='rounded-circle doctor-image' src={doctor.image} alt="" /> */}
                                    <img className='rounded-circle doctor-image' src={`data:image/png;base64,${doctor.image}`} alt="" />
                                </th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDeleteDoctor(doctor)} className='btn btn-sm btn-danger text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;