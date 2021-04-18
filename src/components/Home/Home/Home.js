import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Sliders from '../Sliders/Sliders';
import FeedBack from '../FeedBack/FeedBack';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Sliders></Sliders>
            <FeedBack></FeedBack>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;