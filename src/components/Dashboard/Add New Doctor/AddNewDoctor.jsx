import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNewDoctor = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image) {
            return toast.error('Please Select an image')
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);


        fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/doctors', {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully')
                    navigate('/dashboard/manage-doctors')
                }
            })
            .catch(error => console.log('This file send:', error))
    }


    return (
        <div className='singup mt-3 ms-3 pt-0'>
            <h3>Add New Doctor</h3>
            <div className='form-parent mt-3'>
                <form onSubmit={handleSubmit} className='w-100'>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={e => setName(e.target.value)} type="text" placeholder='Enter Doctor name' className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Doctor email' className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Photo</label>
                        <input onChange={e => setImage(e.target.files[0])} type="file" className="form-control" />
                    </div>

                    <input type="submit" className="signup-button mt-2" value="Add New Doctor" />


                </form>
                <p className='text-success'>{success}</p>
            </div>

        </div>
    );
};

export default AddNewDoctor;