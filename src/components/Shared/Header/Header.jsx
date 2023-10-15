import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <header className='fixed-top bg-white'>
            <nav className="navbar navbar-expand-md ">
                <div className="container ">
                    <Link className="navbar-brand" to="/">Doctors Portal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/appointment">Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/contact">Contact Us</NavLink>
                            </li>
                            {
                                user?.uid ? <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/dashboard">Dashboard</NavLink>
                                    </li>

                                    <button onClick={handleLogOut} className='btn btn-sm btn-outline-secondari'>Sing Out</button>

                                </> : <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                </li>
                            }


                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;