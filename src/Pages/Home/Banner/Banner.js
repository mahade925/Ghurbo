import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannner-container">
            <div className="banner-content">
                <h1 className="mb-5">DISCOVER THE WORLD</h1>
                <button type="button" class="btn btn-outline-info btn-lg">Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;