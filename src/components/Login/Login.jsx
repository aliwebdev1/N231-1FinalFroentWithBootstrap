import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    const handleLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success('Successfully User Login!');

            })
            .catch(error => console.log(error))

    }

    return (
        <div className='singup d-flex justify-content-center align-items-center'>
            <div className='form-parent'>
                <h4 className='text-center'>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)} className='w-100'>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input {...register("email", {
                            required: "Email Address is required",
                        })} type="email" className="form-control" />
                        {errors.email && <p className='text-danger mt-2'> {errors.email.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input {...register("password", {
                            required: true
                        })} type="password" className="form-control" />

                    </div>
                    <p>Forgot Password ?</p>

                    <input type="submit" className="signup-button mt-2" value="LOGIN" />
                    <p className='my-3 text-center'>New to Doctors Portal?? <Link className='text-primari' to="/signup"> Create new account</Link></p>

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

export default Login;