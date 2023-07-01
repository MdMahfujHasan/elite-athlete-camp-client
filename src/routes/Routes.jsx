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
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

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
                path: "classes",
                element: <Classes></Classes>
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
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "instructor-home",
                element: <InstructorHome></InstructorHome>
            },
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "my-classes",
                element: <MyClasses></MyClasses>
            },
            {
                path: "all-classes",
                element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
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
            {
                path: "all-users",
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;