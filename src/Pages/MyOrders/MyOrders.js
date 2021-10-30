import { logDOM } from '@testing-library/dom';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const myOrders = orders.filter(order => order.email === user.email);

    return (
        <div>
            <h3 className="my-5">List of my orders</h3>
            <div className="order-list container">
            <div className="container d-flex justify-content-between bg-light text-start">
                <h3>Email</h3>
                <h3>Name</h3>
                <h3>Phone</h3>
            </div>
            {
                myOrders.map(myOrder => <div className="bg-light d-flex p-3 justify-content-around" style={{
                    borderBottom: '5px solid black'
                }}>
                    <h3>{myOrder.email}</h3>
                    <h3>{myOrder.name}</h3>
                    <h3>{myOrder.phone}</h3>
                    <button className="btn btn-info">Delete</button>
                </div>)
            }
            </div>
        </div>
    );
};

export default MyOrders;