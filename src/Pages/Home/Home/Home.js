import React from 'react';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';
import WhyGhurbo from '../WhyGhurbo/WhyGhurbo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LatestNews></LatestNews>
            <WhyGhurbo></WhyGhurbo>
        </div>
    );
};

export default Home;