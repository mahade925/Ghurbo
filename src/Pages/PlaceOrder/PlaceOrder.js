import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const [service, setService] = useState();
    const { serviceId } = useParams();
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`https://ghostly-cemetery-48204.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleBookNow = e => {
        const BookNowInfo = {
            email: user.email,
            name: user.displayName,
            phone: phone,
            date: startDate,
            message: message,
            status: 'pending',
            serviceId: serviceId
        }

        fetch('https://ghostly-cemetery-48204.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookNowInfo)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId) {
                    alert('Booked Successfully')
                }
            })

        console.log(BookNowInfo);

        e.preventDefault();
    }

    const handlePhone = e => {
        setPhone(e.target.value);
    }
    const handleMessage = e => {
        setMessage(e.target.value);
    };
    

    return (
        <div className="book-now-page d-flex h-100">
            <div className="service-detail w-50 p-5 text-start">
                <img src={service?.img} className="w-75" alt="" />
                <h2 className="my-4 text-danger">{service?.name}</h2>
                <p>{service?.desc}</p>
                <p><i className="far fa-calendar-alt"></i>{service?.days}</p>
                <h2>{service?.price}</h2>
            </div>
            <div className="book-now-form w-50">
                <h1 className="my-5">Book Now</h1>
                <form onSubmit={handleBookNow} class="place-order p-4 row g-3 w-50 m-auto text-start">
                    <div class="col-md-12">
                        <label htmlFor="inputEmail4" class="form-label">Email</label>
                        <input type="email" defaultValue={user.email} class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                        <label htmlFor="inputPassword4" class="form-label">Name</label>
                        <input type="text" defaultValue={user.displayName} class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label htmlFor="inputAddress" class="form-label">Phone</label>
                        <input type="text" onBlur={handlePhone} class="form-control" id="inputAddress" placeholder="Phone number" />
                    </div>
                    <div class="col-12">
                        <label htmlFor="inputAddress" class="form-label">Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="date-picker" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" onBlur={handleMessage} placeholder="Write your message here..." id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="book-now-btn btn btn-primary btn-lg">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;



