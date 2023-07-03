import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import useTheme from "../hooks/useTheme";

const Main = () => {
    const { darkTheme } = useTheme();
    return (
        <div className={`${darkTheme && "bg-indigo-950"}`}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;