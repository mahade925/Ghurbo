import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?size=338&ext=jpg" className="w-50 pt-5" alt="" />
            <h3>Page Not Found</h3>
            <NavLink to="/home">
                <button className="btn btn-info">Go to home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;