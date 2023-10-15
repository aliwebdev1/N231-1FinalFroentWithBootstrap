import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Appointment from "../../components/Appointment/Appointment";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyAppointment from "../../components/Dashboard/MyAppointment/MyAppointment";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../components/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../components/Dashboard/ManageDoctors/ManageDoctors";
import AddNewDoctor from "../../components/Dashboard/Add New Doctor/AddNewDoctor";
import AdminRoute from "../AdminRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/addNewDoctor',
                element: <AdminRoute><AddNewDoctor></AddNewDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors> </AdminRoute>
            },
        ]
    }
])

export default router;