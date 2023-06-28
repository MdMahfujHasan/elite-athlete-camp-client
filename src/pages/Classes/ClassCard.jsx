import { GrFormAdd } from 'react-icons/gr';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassCard = ({ cls }) => {
    const { user } = useAuth();
    const { name, img, instructor, availableSeats, price } = cls;
    const cardClass = `card w-96 ${availableSeats === 0 ? 'bg-red-300' : 'bg-base-100'} shadow-xl`;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = cls => {
        console.log(cls);
        if (user && user.email) {
            const cartItem = { courseName: name, thumbnail: img, instructorName: instructor, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Course is added to cart',
                            'success'
                        )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login first to add this class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className={cardClass}>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-primary">by {instructor}</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Available: {availableSeats}</div>
                    <div className="badge badge-outline font-bold">${price}</div>
                </div>
                <div>
                    <button onClick={() => handleAddToCart(cls)} className="btn btn-xs btn-warning" disabled={availableSeats === 0 && true}><GrFormAdd className='text-lg' />Select Course</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;