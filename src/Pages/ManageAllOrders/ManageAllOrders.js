import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ManageAllOrders'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://ghostly-cemetery-48204.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    // Delete an Order
    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://ghostly-cemetery-48204.herokuapp.com/orders/${id}`;
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

    const handleApprove = id => {
        const url = `https://ghostly-cemetery-48204.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                }
            })
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
                                <h5 className="mb-3">Status : {order.status}</h5>
                                <button className="btn btn-danger m-2" onClick={() => handleDeletOrder(order._id)}>Delete</button>
                                <button className="btn btn-primary" onClick={() => handleApprove(order._id)}>Approve</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;