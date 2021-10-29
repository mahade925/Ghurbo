import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle, processLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h1 className="my-5">Login</h1>
            <div class="place-order p-4 row g-3 w-25 m-auto text-start">
                <div class="col-12">
                    <label htmlFor="inputEmail4" class="form-label">Email</label>
                    <input type="email" onBlur={handleEmail} placeholder="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label htmlFor="inputPassword4" class="form-label">Password</label>
                    <input type="password" onBlur={handlePassword} placeholder="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <button type="submit" onClick={() => processLogin(email, password)} class="book-now-btn btn btn-info btn-lg mt-3">Login</button>
                    <h3 className="text-center my-3">OR</h3>
                    <button type="submit" onClick={signInUsingGoogle} class="book-now-btn btn btn-info btn-lg mt-3 mb-4">Log in with Google</button>
                    <NavLink to="/signup" className="no-account">Dont have any account ?</NavLink>
                </div>
            </div>
        </div>
    );
};

export default LogIn;