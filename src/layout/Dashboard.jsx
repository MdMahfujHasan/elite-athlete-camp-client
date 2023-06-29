import { Link, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import useMyClasses from "../hooks/useMyClasses";
import useAllClasses from "../hooks/useAllClasses";
// import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [cart] = useCart();
    const [myClasses] = useMyClasses();
    const [allClasses] = useAllClasses();
    // const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();

    const navInfo = <>
        <li className="bg-violet-200 rounded"><Link to="/">EAC</Link></li>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/my-cart">My Cart<span className="badge badge-warning badge-sm text-white">{cart.length}</span></Link></li>
        <li><Link to="/dashboard/user-home">User Home</Link></li>
        <li><Link to="/dashboard/instructor-home">Instructor Home</Link></li>
        <li><Link to="/dashboard/admin-home">Admin Home</Link></li>
        <li><Link to="/dashboard/my-classes">My Classes<span className="badge badge-info badge-sm text-white">{myClasses.length}</span></Link></li>
        <li><Link to="/dashboard/all-classes">All Classes<span className="badge badge-success badge-sm text-white">{allClasses.length}</span></Link></li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {navInfo}
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {navInfo}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;