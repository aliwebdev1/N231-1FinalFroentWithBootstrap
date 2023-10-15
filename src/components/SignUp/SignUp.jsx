import React, { useContext } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Successfully User Created!');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        savedUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error))

    }

    const savedUser = (name, email) => {
        const user = { name, email }
        fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/appointment')
            })

    }


    return (
        <div className='singup d-flex justify-content-center align-items-center'>
            <div className='form-parent'>
                <h4 className='text-center'>Sign Up</h4>
                <form onSubmit={handleSubmit(handleSignUp)} className='w-100'>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input {...register("name", {
                            required: "Name is Required"
                        })} type="text" className="form-control" />
                        {errors.name && <p className='text-danger mt-2'> {errors.name.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input {...register("email", {
                            required: true
                        })} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: "Password must be six charecters" },
                            pattern: { value: /[A-Z]/, message: "Password Must me one Capital Latters" }
                        })} type="password" className="form-control" />

                        {errors.password && <p className='text-danger mt-2'> {errors.password.message}</p>}
                    </div>

                    <input type="submit" className="signup-button mt-2" value="SIGN UP" />
                    <p className='my-3 text-center'>Already have an account? <Link className='text-primari' to="/login"> Please Login</Link></p>



                    <div className='text-center d-flex align-items-center'>
                        <p><span></span></p>
                        <p>OR</p>
                        <p><span></span></p>
                    </div>
                    <button className='google-button'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>

        </div>
    );
};

export default SignUp;