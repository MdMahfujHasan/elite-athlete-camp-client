import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const NavBar = () => {
    const navInfo = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>

    return (
        <nav className="navbar bg-violet-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className="text-xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navInfo}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Elite Athlete Camp - EAC</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;