import React from 'react';
import { NavLink } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div>
            <h1 className="my-5">Login</h1>
            <form class="place-order p-4 row g-3 w-25 m-auto text-start">
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" placeholder="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" placeholder="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <button type="submit" class="book-now-btn btn btn-primary btn-lg mt-3">Login</button>
                    <h3 className="text-center my-3">OR</h3>
                    <button type="submit" class="book-now-btn btn btn-primary btn-lg mt-3 mb-4">Log in with Google</button>
                    <NavLink to="/signup" className="no-account">Dont have any account ?</NavLink>
                </div>
            </form>
        </div>
    );
};

export default LogIn;