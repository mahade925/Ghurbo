import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
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
                    <button type="submit" onClick={handleGoogleLogin} class="book-now-btn btn btn-info btn-lg mt-3 mb-4">Log in with Google</button>
                    <NavLink to="/signup">Sign up ?</NavLink>
                </div>
            </div>
        </div>
    );
};

export default LogIn;