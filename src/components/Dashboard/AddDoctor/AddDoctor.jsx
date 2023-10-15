import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = import.meta.env.VITE_image_bb_key;
    const navigate = useNavigate()

    const { data: specialties, refetch, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data;
        },

    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Doctor ${data.name} is Added Successfull`)
                            navigate('/dashboard/manage-doctors')
                        })

                }
            })




    }



    return (
        <div className='singup mt-3 ms-3 pt-0'>
            <h3>Add New Doctor</h3>
            <div className='form-parent mt-3'>

                <form onSubmit={handleSubmit(handleAddDoctor)} className='w-100'>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input {...register("name", {
                            required: "Name is Required"
                        })} type="text" placeholder='Enter Doctor name' className="form-control" />
                        {errors.name && <p className='text-danger mt-2'> {errors.name.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input {...register("email", {
                            required: true
                        })} type="email" placeholder='Enter Doctor email' className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Specialty</label>
                        <select className="form-select"
                            {...register('specialty')}
                            aria-label="Default select example">
                            {
                                specialties?.map(specilty => <option
                                    key={specilty._id}
                                    value={specilty.name}
                                >{specilty.name}</option>)
                            }
                        </select>

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Photo</label>
                        <input {...register("image", {
                            required: true
                        })} type="file" className="form-control" />
                    </div>



                    <input type="submit" className="signup-button mt-2" value="Add Doctor" />


                </form>
            </div>

        </div>
    );
};

export default AddDoctor;       