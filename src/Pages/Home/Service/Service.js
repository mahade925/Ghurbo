import React from 'react';
import './Service.css';
import { NavLink, Link } from 'react-router-dom';

const Service = (props) => {
    const { service } = props;
    return (
        <div className="col">
            <div className="service-card card p-3">
                <img src={service.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-3">{service.name}</h5>
                    <p className="card-text card-desc">{service.desc}</p>
                    <div className="card-info d-flex my-3">
                        <p><i className="far fa-calendar-alt"></i>{service.days}</p>
                        <p>{service.price}</p>
                    </div>
                    <NavLink to="/placeorder">
                        <button className="btn btn-info">Book Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;