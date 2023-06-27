import { useForm } from 'react-hook-form';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
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
                                <span className="label-text"><b>E</b>mail</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <small className='text-rose-400'>Enter your email address</small>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><b>P</b>assword</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input focus:outline-0 border-violet-400 focus:border-2"
                                {...register("password", { required: true })}
                            />
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
    );
};

export default Login;