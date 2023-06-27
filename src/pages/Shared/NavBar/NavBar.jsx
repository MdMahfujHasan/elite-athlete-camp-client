import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const navInfo = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}
        <li>{user?.email}</li>
    </>

    const handleSignOut = () => {
        logOut()
    }
    return (
        <nav className="navbar bg-violet-300 flex justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className="text-xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-300">
                        {navInfo}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Elite Athlete Camp</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </label>}
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><button onClick={handleSignOut}><Link to="/login">Logout</Link></button></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;