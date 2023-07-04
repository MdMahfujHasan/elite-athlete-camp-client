import { useForm } from 'react-hook-form';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password");
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, phone: data.phoneNumber, address: data.address, gender: data.gender, photo: data.photoURL };
                        console.log(saveUser);
                        fetch('https://elite-athlete-camp-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    Swal.fire(
                                        'Hello there,',
                                        'Your account has been created!',
                                        'success'
                                    )
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="hero min-h-screen bg-violet-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-center text-violet-500">Sign Up</h1>
                    <p className="py-6 text-sm md:text-lg text-slate-400 font-serif text-center">Experience the ultimate summer of growth: instructors, offer inspiring classes; students, enroll in extraordinary learning adventures. Sign up now!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("name", { required: true, maxLength: 120 })}
                            />
                            {errors.name?.type === "required" && <small className='text-rose-400'>Name is required</small>}
                            {errors.name?.type === "maxLength" && <small className='text-rose-400'>Max length exceeded</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <small className='text-rose-400'>Email is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 120,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                })}
                            />
                            {errors.password?.type === "required" && <small className='text-rose-400'>Password is required</small>}
                            {errors.password?.type === "minLength" && <small className='text-rose-400'>Password must be minimum 6 characters</small>}
                            {errors.password?.type === "maxLength" && <small className='text-rose-400'>Max password length exceeded</small>}
                            {errors.password?.type === "pattern" && <small className='text-rose-400'>Password must include at least 1 capital letter and a special digit</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: value => value === password || "Password did not match"
                                })}
                            />
                            {errors.confirmPassword && <small className='text-rose-400'>{errors.confirmPassword?.message || "Confirm password"}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                inputMode="numeric"
                                placeholder="Phone Number"
                                className="input focus:outline-0 border-violet-400 focus:border-2 appearance-none number-input"
                                {...register("phoneNumber", {
                                    required: true,
                                    minLength: 7,
                                    maxLength: 15
                                })}
                            />
                            {errors.phoneNumber?.type === "required" && <small className="text-rose-400">Phone number is required</small>}
                            {errors.phoneNumber?.type === "minLength" &&
                                <small className="text-rose-400">
                                    Phone number must be minimum 7 characters
                                </small>}
                            {errors.phoneNumber?.type === "maxLength" &&
                                <small className="text-rose-400">
                                    Phone number can not exceed 15 characters
                                </small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea
                                placeholder="Current Address"
                                className="input focus:outline-0 border-violet-400 focus:border-2 appearance-none h-24"
                                {...register("address", { required: true })}
                            ></textarea>
                            {errors.address && (
                                <small className="text-rose-400">Address is required</small>
                            )}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="flex items-center space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        value="male"
                                        className="form-radio"
                                        {...register("gender", { required: true })}
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="female"
                                        className="form-radio"
                                        {...register("gender", { required: true })}
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="others"
                                        className="form-radio text-sm"
                                        {...register("gender", { required: true })}
                                    />
                                    <span className="ml-2">Others</span>
                                </label>
                            </div>
                            {errors.gender && <small className="text-rose-400">Gender is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("photoURL", { required: true })}
                            />
                            {errors.photoURL && <small className="text-rose-400">Photo URL is required</small>}
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Sign Up"
                                className='btn bg-violet-400 hover:bg-violet-500 text-white'
                            />
                        </div>
                        <p className='text-center text-violet-400'><small>Already have an account? <Link className='text-blue-400 hover:underline' to="/login">Login</Link></small></p>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;