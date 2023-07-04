import useAllClasses from "../../../hooks/useAllClasses";
import { AiFillCheckCircle } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { FcFeedback } from 'react-icons/fc';
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useState } from "react";

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
                fetch(`https://elite-athlete-camp-server.vercel.app/classes/${id}`, {
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (id) => {
        setIsModalOpen((prevModalOpen) => ({
            ...prevModalOpen,
            [id]: true,
        }));
    };

    const handleCloseModal = (id) => {
        setIsModalOpen((prevModalOpen) => ({
            ...prevModalOpen,
            [id]: false,
        }));
    };

    const handleSendFeedback = (id, event) => {
        event.preventDefault();
        const feedback = event.target.elements.feedback.value;
        console.log(feedback, id);
        fetch(`https://elite-athlete-camp-server.vercel.app/classes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: feedback })
        })
            .then(res => res.json())
            .then(() => {
                refetch();
                handleCloseModal(id);
            })
    }

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
                            <th>Enrolled</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <motion.tbody
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {
                            allClasses.map((cls, index) => <motion.tr
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={cls._id}>
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
                                <td>{cls.seats - cls.students}</td>
                                <td className="flex items-center gap-1">
                                    <button title="Approve" disabled={cls.status === "approved" ? true : false} onClick={() => handleApprove(cls._id)}>
                                        <AiFillCheckCircle
                                            className={`text-2xl ${cls.status === "approved"
                                                ? "text-slate-300"
                                                : "text-green-400 hover:text-green-500"
                                                }`}
                                        />
                                    </button>
                                    <button title="Deny" disabled={cls.status === "denied" ? true : false} onClick={() => handleDeny(cls._id)}>
                                        <TiDelete
                                            className={`text-3xl ${cls.status === "denied"
                                                ? "text-slate-300"
                                                : "text-rose-400 hover:text-rose-500"
                                                }`}
                                        />
                                    </button>
                                    <button title="Send Feedback" onClick={() => handleOpenModal(cls._id)}>
                                        <FcFeedback className="text-2xl" />
                                    </button>
                                    {isModalOpen[cls._id] && (
                                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-300 bg-opacity-50">
                                            <form onSubmit={(event) => handleSendFeedback(cls._id, event)} className="bg-white p-8 rounded-lg w-96">
                                                <h2 className="text-xl mb-4">Feedback</h2>
                                                <div className="flex flex-col space-y-4">
                                                    <label htmlFor="feedback-input"><span className="text-red-400 font-semibold">Deny</span> and leave feedback</label>
                                                    <input
                                                        name="feedback"
                                                        type="text"
                                                        className="border border-violet-400 p-2 focus:outline-0"
                                                        placeholder="Leave Feedback"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex justify-end mt-6">
                                                    <button onClick={() => handleCloseModal(cls._id)} className="px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg">
                                                        Cancel
                                                    </button>
                                                    <input
                                                        type="submit"
                                                        value="Send"
                                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </td>
                            </motion.tr>)
                        }
                    </motion.tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;