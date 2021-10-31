import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signInUsingGoogle, createNewUser, error } = useAuth();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    
    return (
        <div>
            <h1 className="my-5">Sign Up</h1>
            <div class="signup-form place-order p-4 row g-3 w-25 m-auto text-start">
                <div class="col-12">
                    <label htmlFor="inputEmail4" class="form-label">Name</label>
                    <input type="name" onBlur={handleName} placeholder="name" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label htmlFor="inputEmail4" class="form-label">Email</label>
                    <input type="email" onBlur={handleEmail} placeholder="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label htmlFor="inputPassword4" class="form-label">Password</label>
                    <input type="password" onBlur={handlePassword} placeholder="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label htmlFor="inputPassword4" class="form-label">Confirm Password</label>
                    <input type="password" placeholder="confirm password" class="form-control" id="inputPassword4" />
                </div>
                <h5 className="text-danger">{error}</h5>
                <div class="col-12">
                    <button type="submit" onClick={() => createNewUser(name, email, password)} class="book-now-btn btn btn-info btn-lg mt-3">Sign Up</button>
                    <h3 className="text-center my-3">OR</h3>
                    <button type="submit" onClick={signInUsingGoogle} class="book-now-btn btn btn-info btn-lg mt-3 mb-4">Log in with Google</button>
                    <NavLink to="/login" className="no-account">Already have an account ?</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignUp;