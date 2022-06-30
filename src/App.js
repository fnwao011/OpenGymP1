import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import styled from 'styled-components'
import AboutUs from './AboutUs.js';
import GamePage from './GamePage';
import ContactUs from './ContactUs.js';
import Registration from './Registration';
import Highlights from './Highlights'
import Organization from './Organization';
import { HashRouter, Route, useNavigate, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HomePage from './Homepage';



function App() {
  return (
    <HashRouter>
      <div className="App">

        <Navbar />


      </div>

      <Routes>
        <Route path="/OpenGymP1" element={<HomePage />} />
        <Route path="/OpenGymP1/highlights" element={<Highlights />} />
        <Route path="/OpenGymP1/register" element={<Registration />} />
        <Route path="/OpenGymP1/organize" element={<Organization />} />
      </Routes>
    </HashRouter>

  );
}

const Container = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    
`;

export default App;
