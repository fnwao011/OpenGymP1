import Navbar from './Navbar';
import Hero from './Hero';
import styled from 'styled-components'
import AboutUs from './AboutUs.js';
import GamePage from './GamePage';
import ContactUs from './ContactUs';

const HomePage = () => {

    return (
        <div>
            <div id="hero">
                <Hero />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="games">
                <GamePage />
            </div>
            <div id='contact'>
                <ContactUs />
            </div>

        </div>
    )
}

export default HomePage;