import React from 'react';
import AdvertiseProduct from './AdvertiseProduct';
import Banner from './Banner';
import Categories from './Categories';
import ExtraSection from './ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertiseProduct></AdvertiseProduct>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;