import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";
// import useInstructor from "../../../hooks/useInstructor";
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import useTheme from "../../../hooks/useTheme";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    // const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();
    const { darkTheme, setDarkTheme } = useTheme();

    const badgeClass = `badge badge-sm ms-1 ${!darkTheme && "badge-neutral"}`;
    const navInfo = <>
        <Link to="/">Home</Link>
        <Link to="/instructors">Instructors</Link>
        <Link to="/classes">Classes</Link>
        {user && <Link to="/dashboard/my-cart">Dashboard<span className={badgeClass}>{cart.length}</span></Link>}
        {/* <li><Link to={isAdmin ? "/dashboard/admin-home" : (isInstructor ? "/dashboard/instructor-home" :
            "/dashboard/user-home"
        )}>Dashboard</Link></li> */}
        {!user && <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
        </>}
        <button onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <BsMoonFill className="text-lg" /> : <BsSunFill className="text-lg" />}</button>
    </>

    const handleSignOut = () => {
        logOut()
    }

    const navbarClass = `navbar ${darkTheme ? 'bg-indigo-950 text-white' : 'bg-violet-300'} flex justify-around`;
    const profileClass = `mt-3 space-y-2 shadow menu menu-sm dropdown-content p-4 rounded-box w-52 z-10 ${darkTheme ? 'bg-indigo-950' : 'bg-base-100'}`;
    return (
        <nav className={navbarClass}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className="text-xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-300 z-10 space-x-4">
                        {navInfo}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Elite Athlete Camp</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-10 space-x-8">
                    {navInfo}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </label>}
                <ul tabIndex={0} className={profileClass}>
                    <Link to="/profile">Profile</Link>
                    <Link to="/settings">Settings</Link>
                    <Link onClick={handleSignOut} to="/login">Logout</Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;