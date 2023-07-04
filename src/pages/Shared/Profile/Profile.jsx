import useTheme from "../../../hooks/useTheme";
import useProfile from "../../../hooks/useProfile";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import './Profile.css';
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { darkTheme } = useTheme();
    const { user } = useAuth();
    const [userDetails, refetch] = useProfile();
    const [hide, setHide] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const profileClass = `flex flex-col md:flex-row justify-around gap-4 p-8 ${darkTheme && "bg-indigo-950 text-slate-300"}`

    const onSubmit = (updateUser) => {
        fetch(`https://elite-athlete-camp-server.vercel.app/users/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Profile Updated',
                        text: 'Your profile has been successfully updated.',
                    });
                }
            })
    };

    return (
        <>
            <Helmet>
                <title>Profile - EAC</title>
            </Helmet>
            <div className={profileClass}>
                <div>
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
                    <button onClick={() => setHide(!hide)} className="btn btn-xs btn-success text-white">Edit</button>

                    <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col ${hide ? "invisible" : "visible"}`}>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <label htmlFor="photo" className="block mb-2">
                                    Photo URL:
                                </label>
                                <input
                                    type="text"
                                    id="photo"
                                    placeholder="Photo URL"
                                    {...register('photo', { required: true })}
                                    className="px-4 py-2 rounded-md w-full focus:outline-0 border border-violet-400 text-slate-700"
                                />
                                {errors.photo && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div>
                                <label htmlFor="name" className="block mb-2">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    {...register('name', { required: true, maxLength: 120 })}
                                    className="px-4 py-2 rounded-md w-full focus:outline-0 border border-violet-400 text-slate-700"
                                />
                                {errors.name?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                {errors.name?.type === 'maxLength' && <span className="text-red-500">Maximum length exceeded</span>}
                            </div>
                        </div>

                        <div className="flex mb-2">
                            <div className="mr-4">
                                <label htmlFor="phone" className="block mb-2">
                                    Phone:
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Phone Number"
                                    {...register('phone', { required: true, minLength: 7, maxLength: 15 })}
                                    className="px-4 py-2 rounded-md w-full focus:outline-0 border border-violet-400 text-slate-700 number-input"
                                />
                                {errors.phone?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                {errors.phone?.type === 'minLength' && <span className="text-red-500">Minimum length is 7</span>}
                                {errors.phone?.type === 'maxLength' && <span className="text-red-500">Maximum length exceeded</span>}
                            </div>

                            <div>
                                <label htmlFor="gender" className="block mb-2">
                                    Gender:
                                </label>
                                <select
                                    id="gender"
                                    {...register('gender', { required: true })}
                                    className="select rounded-md w-28 focus:outline-0 border border-violet-400 text-slate-700"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                                {errors.gender && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>

                        <div className="mr-4">
                            <label htmlFor="address" className="block mb-2">
                                Address:
                            </label>
                            <textarea
                                id="address"
                                placeholder="Address"
                                {...register('address', { required: true })}
                                className="px-4 py-2 rounded-md w-full focus:outline-0 border border-violet-400 text-slate-700"
                            />
                            {errors.address && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="mr-4 my-1">
                            <label htmlFor="email" className="block mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={userDetails[0]?.email}
                                readOnly
                                {...register('email', { required: true })}
                                className="px-4 py-2 rounded-md w-full appearance-none focus:outline-none focus:ring-0 border border-violet-400 text-slate-400"
                            />
                        </div>

                        <div className="mr-4">
                            <label htmlFor="email" className="block mb-2">
                                Role:
                            </label>
                            <input
                                type="text"
                                id="role"
                                defaultValue={userDetails[0]?.role ? userDetails[0].role : "user"}
                                readOnly
                                {...register('role', { required: true })}
                                className="px-4 py-2 rounded-md w-full appearance-none focus:outline-none focus:ring-0 border border-violet-400 text-slate-400"
                            />
                        </div>

                        <button type="submit" className="btn btn-sm btn-accent text-white mt-4 mr-4">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;