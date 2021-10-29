import React from 'react';

const WhyGhurbo = () => {
    return (
        <div className="container my-5">
            <h1 className="my-5">Why Ghurbo</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col">
                    <div class="card h-100 px-5 py-4">
                        <img src="https://i.ibb.co/48nJf7s/guide.png" className="w-25 m-auto" alt="" />
                        <h4>2000+ Our worldwide guide</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 px-5 py-4">
                        <img src="https://i.ibb.co/Wt1xk6H/trust.png" className="w-25 m-auto" alt="" />
                        <h4>100% trusted travel agency</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 px-5 py-4">
                        <img src="https://i.ibb.co/TmXbX3X/traveller.png" className="w-25 m-auto" alt="" />
                        <h4 className="">90% of our traveller happy</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyGhurbo;