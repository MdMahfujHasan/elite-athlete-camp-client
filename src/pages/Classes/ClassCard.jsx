import { BiSolidCartAdd } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';
import useTheme from '../../hooks/useTheme';

const ClassCard = ({ cls }) => {
    const { user } = useAuth();
    const { name, img, instructor, availableSeats, price, students } = cls;
    const navigate = useNavigate();
    const location = useLocation();
    const [userDetails] = useProfile();
    const { darkTheme } = useTheme();

    const cardClass = `card rounded w-96 ${availableSeats === 0 ? 'bg-red-400 text-slate-600' : 'bg-base-100'} shadow-xl ${darkTheme && 'bg-slate-900'}}`;
    const PopularClassesCardClass = `card-body ${darkTheme && 'bg-slate-900 text-white'}`;

    const handleAddToCart = cls => {
        console.log(cls);
        if (user && user.email) {
            const cartItem = { courseName: name, thumbnail: img, instructorName: instructor, price, email: user.email }
            Swal.fire({
                title: `Add ${name} to cart?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Add to Cart'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('https://elite-athlete-camp-server.vercel.app/carts', {
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
            <figure><img src={img} /></figure>
            <div className={PopularClassesCardClass}>
                <h2 className="card-title">
                    {name}
                    <div className={`badge badge-outline ${darkTheme ? "badge-info" : "badge-primary"}`}>by {instructor}</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><b className="mr-1">{availableSeats}</b> available seats</div>
                    <div className="badge badge-outline"><b className="mr-1">{students}</b> students</div>
                    <div className="badge badge-outline">${price}</div>
                </div>
                <div>
                    <button onClick={() => handleAddToCart(cls)}
                        className="btn btn-xs btn-accent"
                        disabled={(availableSeats === 0 && true) || userDetails[0]?.role === "admin" || userDetails[0]?.role === "instructor"}
                    >
                        <BiSolidCartAdd className='text-lg' />Add Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;