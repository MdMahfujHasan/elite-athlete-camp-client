import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import useMyClasses from "../../../hooks/useMyClasses";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const MyClasses = () => {
    const [myClasses, refetch] = useMyClasses();

    const handleUpdate = id => {

    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/classes/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
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
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <motion.tbody
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {
                        myClasses.map((myClass, index) => <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={myClass._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myClass.courseThumbnail} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{myClass.courseName}</div>
                                        <div
                                            className={
                                                myClass.status === "approved" ? "bg-green-400 badge rounded-full text-white" :
                                                    myClass.status === "denied" ? "bg-red-400 badge rounded-full text-white" :
                                                        "bg-violet-400 badge rounded-full text-white"}
                                        >{myClass.status}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {myClass.instructorName}
                                <br />
                                <span className="badge badge-ghost badge-sm">{myClass.email}</span>
                            </td>
                            <td>${myClass.price}</td>
                            <td>{myClass.seats}</td>
                            <td>{myClass.students}</td>
                            <td>{myClass.status === "denied" && myClass.feedback ? myClass.feedback : null}</td>
                            <td>
                                <button onClick={() => handleUpdate(myClass._id)}><FaEdit className="text-2xl text-blue-400 hover:text-blue-500 mr-2" /></button>
                                <button onClick={() => handleDelete(myClass._id)}><RiDeleteBin2Fill className="text-2xl text-red-400 hover:text-red-500" /></button>
                            </td>
                        </motion.tr>)
                    }
                </motion.tbody>
            </table>
        </div>
    );
};

export default MyClasses;