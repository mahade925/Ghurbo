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

    // Delete an Order
    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <h3 className="my-5">List of my orders</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                {
                    myOrders.map(myOrder => <div className="col">
                        <div class="card border-info mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Name : {myOrder.name}</h5>
                                <h6>Email : {myOrder.email}</h6>
                                <h6>Date : {myOrder.date}</h6>
                                <h6>Phone : {myOrder.phone}</h6>
                                <p class="card-text">Message : {myOrder.message}</p>
                                <h5 className="mb-3">Status : {myOrder.status}</h5>
                                <button className="btn btn-danger" onClick={() => handleDeletOrder(myOrder._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
