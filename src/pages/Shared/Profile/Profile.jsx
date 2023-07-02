import useTheme from "../../../hooks/useTheme";
import useProfile from "../../../hooks/useProfile";

const Profile = () => {
    const { darkTheme } = useTheme();
    const [userDetails] = useProfile();

    const profileClass = `flex justify-around p-8 ${darkTheme && "bg-violet-950 text-slate-300"}`
    return (
        <div className={profileClass}>
            <div className="">
                {
                    userDetails.map(userDetail => <div key={userDetail._id}>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={userDetail.photo} />
                            </div>
                        </div>
                        <p><b>Role:</b> <span className={`badge badge-md text-white ${userDetail.role === 'admin' ? 'badge-primary' : userDetail.role === 'instructor' ? 'badge-success' : 'badge-info'}`}>{userDetail.role ? userDetail.role : "student"}</span></p>
                        <h3><b>Full Name:</b> {userDetail.name}</h3>
                        <p><b>Email Address:</b> {userDetail.email}</p>
                        <p><b>Phone:</b> {userDetail.phone}</p>
                        <p><b>Address:</b> {userDetail.address}</p>
                        <p><b>Gender:</b> {userDetail.gender}</p>
                    </div>)
                }
            </div>
            <div>
                <button className="btn btn-xs btn-success">Edit</button>
            </div>
        </div>
    );
};

export default Profile;