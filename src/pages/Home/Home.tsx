import React from 'react'
import FunFacts from '../../components/Home/FunFacts';
import OurServices from '../../components/Home/OurServices';
import Testimonials from '../../components/Home/Testimonials';
import HomeLayout from '../../components/Layout/HomeLayout';

const Home = () => {
    return (
        <HomeLayout>
            <OurServices />
            <Testimonials />
        </HomeLayout>
    )
}

export default Home
