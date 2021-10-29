import React from 'react';
import './LatestNews.css'

const LatestNews = () => {
    return (
        <div className="latest-news-container container my-5 text-right">
            <h1 className="mb-5 news-title">Latest News</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://images.pexels.com/photos/2150304/pexels-photo-2150304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Fishing your youngest</h5>
                        <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-primary">Read More</button>
                        </div>
                        <div class ="card-footer">
                        <small class ="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://images.pexels.com/photos/2801312/pexels-photo-2801312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">New Cyciling Roads</h5>
                        <p class ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary">Read More</button>
                        </div>
                        <div class ="card-footer">
                        <small class ="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://images.pexels.com/photos/10030260/pexels-photo-10030260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Personal Photographer</h5>
                        <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
                        <button className="btn btn-primary">Read More</button>
                        </div>
                        <div class ="card-footer">
                        <small class ="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;