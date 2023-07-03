import useCart from "../../../hooks/useCart";
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const handleDelete = item => {
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
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
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
                        <th>Price</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th className="space-x-2">
                            <small className="text-lg text-slate-400">${totalPrice}</small>
                            {totalPrice > 0 ?
                                <>
                                    <Link to="/dashboard/payment">
                                        <button className="btn btn-xs btn-success text-white">Checkout</button>
                                    </Link>
                                </> :
                                <>
                                    <button className="btn btn-xs btn-disabled">Checkout</button>
                                </>}
                        </th>
                    </tr>
                </thead>
                <motion.tbody
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {
                        cart.map((item, index) => <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.thumbnail} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{item.courseName}</div>
                                        <div className="text-sm opacity-50">by {item.instructorName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>{item.email}</td>
                            <th>
                                <button onClick={() => handleDelete(item)}>
                                    <RiDeleteBin5Fill className="text-2xl text-red-400 hover:text-red-500" />
                                </button>
                            </th>
                        </motion.tr>)
                    }
                </motion.tbody>
            </table>
        </div>
    );
};

export default MyCart;