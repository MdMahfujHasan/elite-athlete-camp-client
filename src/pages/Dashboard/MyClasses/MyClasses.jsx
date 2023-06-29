import { RiDeleteBin2Fill } from 'react-icons/ri';
import useMyClasses from "../../../hooks/useMyClasses";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [myClasses, refetch] = useMyClasses();

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
                        <th>Total Seats</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClasses.map((myClass, index) => <tr key={myClass._id}>
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
                            <td>
                                <button onClick={() => handleDelete(myClass._id)}><RiDeleteBin2Fill className="text-3xl text-red-400" /></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;