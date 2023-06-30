import usePaymentHistory from "../../../hooks/usePaymentHistory";
import { motion } from "framer-motion";

const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();
    const qty = paymentHistory.map(item => item.quantity);
    const totalQuantity = qty.reduce((total, currentValue) => total + currentValue, 0);

    const price = paymentHistory.map(item => item.price);
    const totalPrice = price.reduce((total, currentValue) => total + currentValue, 0);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <motion.tbody
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {
                            paymentHistory.map((item, index) => <motion.tr
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                                <td><span className="text-violet-400 font-semibold rounded-full ">{item.status}</span></td>
                            </motion.tr>)
                        }
                    </motion.tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total Price: ${totalPrice}</th>
                            <th>Total Quantity: {totalQuantity}</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;