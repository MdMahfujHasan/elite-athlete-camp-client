import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

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
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;