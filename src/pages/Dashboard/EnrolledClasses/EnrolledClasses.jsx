import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../hooks/usePaymentHistory";

const EnrolledClasses = () => {
    const [paymentHistory] = usePaymentHistory();
    return (
        <>
            <Helmet>
                <title>Enrolled Classes</title>
            </Helmet>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Enrolled Classes</th>
                                <th>TrxID</th>
                                <th>Cost</th>
                                <th>Purchased</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div>
                                                    {item.courseNames.map(course => <span className="badge badge-outline badge-success m-1" key={course}>{course}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="badge text-blue-500">{item.transactionId}</span></td>
                                    <td>${item.price}</td>
                                    <td>{item.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EnrolledClasses;