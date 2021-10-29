import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light py-2" style={{
                backgroundColor: "#dff9fb"
            }}>
                <div class="container">
                    <h1>Ghurbo</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/destinations" className="nav-link">Destinations</Link>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;