import React, { useContext } from 'react';
import Header from '../components/Shared/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Header></Header>
            <div className='d-flex  mt-5'>
                <div className='w-25 bg-white mt-5 p-4'>

                    <NavLink className="nav-link my-2 active" aria-current="page" to="/dashboard">My Appointment</NavLink>

                    {
                        isAdmin && <>
                            <NavLink className="nav-link my-2" aria-current="page" to="/dashboard/allusers">All Users</NavLink>

                            <NavLink className="nav-link my-2" aria-current="page" to="/dashboard/add-doctor">Add Doctor</NavLink>

                            <NavLink className="nav-link my-2" aria-current="page" to="/dashboard/addNewDoctor">Add New Doctor</NavLink>

                            <NavLink className="nav-link my-2" aria-current="page" to="/dashboard/manage-doctors">Manage Doctor</NavLink>
                        </>
                    }



                </div>
                <div className='w-75 mt-5 p-4 bg-secondari'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;