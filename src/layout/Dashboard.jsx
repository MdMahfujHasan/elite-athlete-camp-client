import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useMyClasses from "../hooks/useMyClasses";
import useAllClasses from "../hooks/useAllClasses";
import usePaymentHistory from "../hooks/usePaymentHistory";
import { FcHome } from 'react-icons/fc';
import useTheme from "../hooks/useTheme";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [cart] = useCart();
    const [myClasses] = useMyClasses();
    const [allClasses] = useAllClasses();
    const [paymentHistory] = usePaymentHistory();
    const { darkTheme, setDarkTheme } = useTheme();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const navInfo = <>
        <Link to="/"><FcHome className="text-2xl" /></Link>
        <Link to="/classes">Classes</Link>
        <Link to="/instructors">Instructors</Link>
        {
            isAdmin ?
                <>
                    <Link to="/dashboard/admin-home">Admin Home</Link>
                    <Link to="/dashboard/all-classes">Manage Classes<span className="badge badge-success badge-sm text-white ms-1">{allClasses.length}</span></Link>
                    <Link to="/dashboard/all-users">Manage Users</Link>
                    <Link to="/dashboard/all-payments">All Payments</Link>
                </> :
                isInstructor ?
                    <>
                        <Link to="/dashboard/instructor-home">Instructor Home</Link>
                        <Link to="/dashboard/my-classes">My Classes<span className="badge badge-info badge-sm text-white ms-1">{myClasses.length}</span></Link>
                    </> :
                    <>
                        <Link to="/dashboard/user-home">User Home</Link>
                        <Link to="/dashboard/my-cart">My Cart<span className="badge badge-warning badge-sm text-white ms-1">{cart.length}</span></Link>
                        <Link to="/dashboard/payment-history">Payment History<span className="badge badge-error badge-sm text-white ms-1">{paymentHistory.length}</span></Link>
                        <Link to="/dashboard/enrolled-classes">Enrolled Classes</Link>
                    </>
        }
        <button onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <BsMoonFill className="text-lg" /> : <BsSunFill className="text-lg" />}</button>
    </>

    const dashboardNavbarClass = `w-full navbar ${darkTheme ? 'bg-indigo-950 text-white' : 'bg-violet-300'} flex justify-around`;
    return (
        <>
            <Helmet>
                <title>Dashboard - EAC</title>
            </Helmet>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className={dashboardNavbarClass}>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal space-x-4">
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
        </>
    );
};

export default Dashboard;