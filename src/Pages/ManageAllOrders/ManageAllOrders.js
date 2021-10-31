import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageAllOrders'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

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
            <h1>Manage All Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                {
                    orders.map(order => <div className="col">
                        <div class="card border-info mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Name : {order.name}</h5>
                                <h6>Email : {order.email}</h6>
                                <h6>Date : {order.date}</h6>
                                <h6>Phone : {order.phone}</h6>
                                <p class="card-text">Message : {order.message}</p>
                                <button className="btn btn-danger" onClick={() => handleDeletOrder(order._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;