import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';

const InstructorHome = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const newClass = { courseName: data.name, courseThumbnail: data.image, instructorName: data.instructorName, email: data.email, seats: parseInt(data.seats), price: parseInt(data.price), status: "pending", students: 0 };
        console.log(newClass);
        fetch('https://elite-athlete-camp-server.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Great!',
                    "You've added a new class",
                    'success'
                )
                reset();
            })
    }
    return (
        <>
            <SectionTitle title="New Class" heading="Add a Class"></SectionTitle>
            <div className="flex flex-col justify-center items-center">
                <div className="card w-full max-w-md shadow-2xl bg-base-100 pb-4">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Class Name"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("name", { required: true, maxLength: 120 })}
                            />
                            {errors.name?.type === "required" && <small className='text-rose-400'>Name is required</small>}
                            {errors.name?.type === "maxLength" && <small className='text-rose-400'>Max length exceeded</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Class Image URL"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("image", { required: true })}
                            />
                            {errors.image && <small className='text-rose-400'>Image is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input focus:outline-0 border-violet-400 text-slate-700"
                                {...register("instructorName", { required: true, maxLength: 120 })}
                            />
                            {errors.instructorName?.type === "required" && <small className='text-rose-400'>Instructor name is required</small>}
                            {errors.instructorName?.type === "maxLength" && <small className='text-rose-400'>Max name length exceeded</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input focus:outline-0 border-violet-400 appearance-none text-slate-700"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <small className="text-rose-400">Email is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Seats"
                                className="input focus:outline-0 border-violet-400 appearance-none"
                                {...register("seats", { required: true })}
                            />
                            {errors.seats && <small className="text-rose-400">Seats is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="$ Price"
                                className="input focus:outline-0 border-violet-400 appearance-none"
                                {...register("price", { required: true })}
                            />
                            {errors.price && <small className="text-rose-400">Price is required</small>}
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Add Class"
                                className='btn bg-violet-400 hover:bg-violet-500 text-white'
                            />
                        </div>
                    </form >

                </div>
            </div>
        </>
    );
};

export default InstructorHome;