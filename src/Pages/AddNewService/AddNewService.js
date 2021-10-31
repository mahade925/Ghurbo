import axios from 'axios';
import React, { useState } from 'react';
import './AddNewService.css';

const AddNewService = () => {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [days, setDays] = useState('');
    const [price, setPrice] = useState('');

    const handleImg = e => {
        setImg(e.target.value);
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleDesc = e => {
        setDesc(e.target.value);
    }
    const handleDate = e => {
        setDays(e.target.value);
    }
    const handlePrice = e => {
        setPrice(e.target.value);
    }

    const handleAddService = () => {
        const serviceInfo = {img, name, desc, days, price, status: 'pending'}
        axios.post('https://ghostly-cemetery-48204.herokuapp.com/services', serviceInfo)
        .then(res => {
            if(res.data.insertedId) {
                alert('Added Successfully')
            }
        })
    }

    return (
        <div>
            <h1 className="my-5">Add New Service</h1>
            <div className="add-service container text-start w-25">
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput2" class="form-label">Service Image</label>
                    <input type="text" onBlur={handleImg} class="form-control" id="formGroupExampleInput2" placeholder="Service Image" />
                </div>
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput" class="form-label">Service Name</label>
                    <input type="text" onBlur={handleName} class="form-control" id="formGroupExampleInput" placeholder="service name" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Service Description</label>
                    <textarea onBlur={handleDesc} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your service description here"></textarea>
                </div>
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput2" class="form-label">Service Date</label>
                    <input type="text" onBlur={handleDate} class="form-control" id="formGroupExampleInput2" placeholder="Service Date" />
                </div>
                <div class="mb-3">
                    <label htmlFor="formGroupExampleInput2" class="form-label">Service Price</label>
                    <input type="text" onBlur={handlePrice} class="form-control" id="formGroupExampleInput2" placeholder="Service Price" />
                </div>
                <button className="btn btn-info btn-lg w-100" onClick={handleAddService}>Add Service</button>
            </div>
        </div>
    );
};

export default AddNewService;