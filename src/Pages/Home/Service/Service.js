import React from 'react';
import './Service.css';
import { NavLink, Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, name, desc, days, price } = service;
    return (
        <div className="col">
            <div className="service-card card p-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-3">{name}</h5>
                    <p className="card-text card-desc">{desc}</p>
                    <div className="card-info d-flex my-3">
                        <p><i className="far fa-calendar-alt"></i>{days}</p>
                        <p>{price}</p>
                    </div>
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn btn-info">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;