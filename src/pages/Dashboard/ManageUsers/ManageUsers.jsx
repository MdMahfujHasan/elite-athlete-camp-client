import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { GrUserAdmin } from 'react-icons/gr';
import { FaUser, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: `Make ${user.name} an admin?`,
            text: "You can always reverse this decision",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Great!',
                                `${user.name} is now an admin`,
                                'success',
                            )
                        }
                    })
            }
        })
    }

    const handleMakeInstructor = user => {
        Swal.fire({
            title: `Make ${user.name} an instructor?`,
            text: "You can always reverse this decision",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Instructor'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/instructor/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Great!',
                                `${user.name} is now an instructor`,
                                'success',
                            )
                        }
                    })
            }
        })
    }

    const handleMakeUser = user => {
        Swal.fire({
            title: `Make ${user.name} an user?`,
            text: "You can always reverse this decision",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make User'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedUser = { ...user };
                delete updatedUser.role;

                fetch(`http://localhost:5000/users/role/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Success!',
                                `Admin role has been removed from ${user.name}`,
                                'success'
                            );
                        }
                    });
            }
        });
    };


    // const handleDeleteUser = () => {
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //         method: 'DELETE'
    //     })
    // }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className={`${user.role === "admin" ? "bg-blue-200" : user.role === "instructor" ? "bg-green-100" : "bg-slate-100"
                                }`}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? <>
                                        <span className="badge badge-primary"><FaUserShield className="mr-1 text-base" />Admin</span>
                                        <button className="btn btn-xs mx-2 btn-success text-white" onClick={() => handleMakeInstructor(user)}>Make Instructor</button>
                                        <button className="btn btn-xs" onClick={() => handleMakeUser(user)}>Make User</button>
                                    </> : user.role === "instructor" ? <>
                                        <span className="badge badge-success text-white"><FaChalkboardTeacher className="mr-1 text-base" />Instructor</span>
                                        <button className="btn btn-xs mx-2 btn-primary" onClick={() => handleMakeAdmin(user)}>Make Admin</button>
                                        <button className="btn btn-xs" onClick={() => handleMakeUser(user)}>Make User</button>
                                    </> :
                                        <div className="space-x-2">
                                            <span className="badge"><FaUser className="mr-1" />User</span>
                                            <button className="btn btn-xs btn-primary" onClick={() => handleMakeAdmin(user)}>Make Admin</button>
                                            <button className="btn btn-xs btn-success text-white" onClick={() => handleMakeInstructor(user)}>Make Instructor</button>
                                        </div>
                                    }
                                </td>
                                <td>
                                    {/* <button className="btn btn-xs btn-error" onClick={() => handleDeleteUser(user)}>delete user</button> */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;