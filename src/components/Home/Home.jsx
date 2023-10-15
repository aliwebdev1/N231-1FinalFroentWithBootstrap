import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Reviews from './Reviews/Reviews';
import Doctors from './Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Doctors></Doctors>
            <ExceptionalDental />
            <MakeAppointment />
            <Reviews></Reviews>

        </div>
    );
};

export default Home;