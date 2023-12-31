import { useForm } from 'react-hook-form';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [hide, setHide] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Swal.fire(
                    'Good job!',
                    'User Login Successful!',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Helmet>
                <title>Login - EAC</title>
            </Helmet>
            <div className="hero min-h-screen bg-violet-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-center text-violet-500">Login</h1>
                        <p className="py-6 text-sm md:text-lg text-slate-400 font-serif text-center">Experience the ultimate summer of growth: instructors, offer inspiring classes; students, enroll in extraordinary learning adventures. Login now!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

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
                                {errors.email && <small className='text-rose-400'>Enter your email address</small>}
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={hide ? "password" : "text"}
                                    name="password"
                                    placeholder="Password"
                                    className="input focus:outline-0 border-violet-400 focus:border-2"
                                    {...register("password", { required: true })}
                                />
                                <small
                                    onClick={() => setHide(!hide)}
                                    className="absolute right-3 bottom-4 text-xs font-semibold hover:cursor-pointer">
                                    {hide ? <HiEyeOff className="text-lg text-violet-500" /> :
                                        <HiEye className="text-lg text-violet-500" />}
                                </small>
                                {errors.password && <small className='text-rose-400'>Enter your password</small>}
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Login"
                                    className='btn bg-violet-400 hover:bg-violet-500 text-white'
                                />
                            </div>
                        </form>
                        <p className="text-center text-violet-400"><small>Don&rsquo;t have an account? <Link className='text-blue-400 hover:underline' to="/signup">Sign Up</Link></small></p>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;