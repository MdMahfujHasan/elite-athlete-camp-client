import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useTheme from "../../../hooks/useTheme";

const Profile = () => {
    const { user } = useAuth();
    const { darkTheme } = useTheme();
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [user])

    const profileClass = `p-8 ${darkTheme && "bg-violet-950 text-slate-300"}`
    return (
        <div className={profileClass}>
            <div className="w-1/3 mx-auto">
                {
                    userDetails.map(userDetail => <div key={userDetail._id}>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={userDetail.photo} />
                            </div>
                        </div>
                        <p><b>Role:</b> <span className={`badge badge-md text-white ${userDetail.role === 'admin' ? 'badge-primary' : userDetail.role === 'instructor' ? 'badge-success' : 'badge-outline'}`}>{userDetail.role ? userDetail.role : "user"}</span></p>
                        <h3><b>Full Name:</b> {userDetail.name}</h3>
                        <p><b>Email Address:</b> {userDetail.email}</p>
                        <p><b>Phone:</b> {userDetail.phone}</p>
                        <p><b>Address:</b> {userDetail.address}</p>
                        <p><b>Gender:</b> {userDetail.gender}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Profile;