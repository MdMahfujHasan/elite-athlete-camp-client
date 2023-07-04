import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Profile from "../pages/Shared/Profile/Profile";
import Settings from "../pages/Shared/Settings/Settings";
import InstructorClasses from "../pages/Instructors/InstructorClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "instructors/:id",
                element: <InstructorClasses></InstructorClasses>,
                loader: ({ params }) => fetch(`http://localhost:5000/instructors/${params.id}`)
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "settings",
                element: <PrivateRoute><Settings></Settings></PrivateRoute>
            }
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user route
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "enrolled-classes",
                element: <EnrolledClasses></EnrolledClasses>
            },
            // instructor route
            {
                path: "instructor-home",
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: "my-classes",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // admin route
            {
                path: "admin-home",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "all-classes",
                element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;