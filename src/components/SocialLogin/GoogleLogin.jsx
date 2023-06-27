import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn border-violet-600 hover:text-white border w-80 p-3 hover:bg-violet-600">
                <FcGoogle className='text-xl' />
                <h3>Sign in with Google</h3>
            </button>
        </div>
    );
};

export default GoogleLogin;