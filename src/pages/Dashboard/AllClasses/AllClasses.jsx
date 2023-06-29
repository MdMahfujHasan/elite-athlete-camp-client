import useAllClasses from "../../../hooks/useAllClasses";
import { AiFillCheckCircle } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import Swal from "sweetalert2";

const AllClasses = () => {
    const [allClasses, refetch] = useAllClasses();

    const handleUpdateStatus = (id, status) => {
        Swal.fire({
            title: `Are you sure you want it to be ${status}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: `${status === "approved" ? "#2ECC71" : "#E74C3C"}`,
            cancelButtonColor: '#ABB2B9',
            confirmButtonText: `${status === "approved" ? "Approve" : "Deny"}`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/classes/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status })
                })
                    .then(res => res.json())
                    .then(() => {
                        refetch();
                    })
            }
        })
    }

    const handleApprove = id => {
        handleUpdateStatus(id, 'approved');
    };

    const handleDeny = id => {
        handleUpdateStatus(id, 'denied');
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor Info</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Students</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((cls, index) => <tr key={cls._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.courseThumbnail} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{cls.courseName}</div>
                                            <div
                                                className={
                                                    cls.status === "approved" ? "bg-green-400 badge rounded-full text-white" :
                                                        cls.status === "denied" ? "bg-red-400 badge rounded-full text-white" :
                                                            "bg-violet-400 badge rounded-full text-white"}
                                            >{cls.status}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cls.instructorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{cls.email}</span>
                                </td>
                                <td>${cls.price}</td>
                                <td>{cls.seats}</td>
                                <td>{cls.students}</td>
                                <td className="flex items-center gap-1">
                                    <button onClick={() => handleApprove(cls._id)}>
                                        <AiFillCheckCircle className="text-2xl text-green-400 hover:text-green-500" />
                                    </button>
                                    <button onClick={() => handleDeny(cls._id)}>
                                        <TiDelete className="text-3xl text-rose-400 hover:text-rose-500" />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;