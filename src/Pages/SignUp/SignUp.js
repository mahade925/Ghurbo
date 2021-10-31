import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { signInUsingGoogle, setUser} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect)
            })
    }
    
    return (
        <div>
            <h1 className="my-5">Login</h1>
            <div class="place-order login-form p-4 row g-3 w-25 m-auto text-start">
                <div class="col-12">
                    <button type="submit" onClick={handleGoogleLogin} class="book-now-btn btn btn-info btn-lg mt-3 mb-4">Sign up with Google</button>
                    <NavLink to="/login">Log in ?</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignUp;