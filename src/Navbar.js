import { render } from "@testing-library/react"
import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from "react-router-hash-link";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";
import './Navstyle.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Nav>
                <Logo> <Link to='/OpenGymP1' style={{ textDecoration: 'none', color: '#EA5C2B' }}>OpenGym </Link></Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>

                    <MenuLink onClick={() => {

                    }}><HashLink to='/OpenGymP1/#about' style={{ textDecoration: 'none' }} className='rr'> About Us </HashLink></MenuLink>
                    <MenuLink onClick={() => {

                    }}><HashLink to='/OpenGymP1/#games' className='rr'> Games </HashLink></MenuLink>

                    <MenuLink onClick={() => {

                    }}> <Link to='/OpenGymP1/register' className='rr'>Registration</Link></MenuLink>

                    <MenuLink onClick={() => {

                    }}> <Link to='/OpenGymP1/highlights' className='rr'>Highlights</Link></MenuLink>

                    <MenuLink onClick={() => {

                    }}><HashLink to='/OpenGymP1/#contact' className='rr'>Contact Us</HashLink></MenuLink>

                </Menu>
            </Nav>
        </div>

    );
}

const Nav = styled.div`
    padding:0 2rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap:wrap;
    background:white;
    
   
 
    

`
const Logo = styled.a`
    padding: 1rem 0;
     text-decoration:none;
     font-weight:500;
    color:#EA5C2B;
    font-size:1.5rem;



`
const Hamburger = styled.div`
    display:none;
    flex-direction:column;
    cursor:pointer;

    span{
        height:2px;
        width:25px;
        background:#EA5C2B;
        margin-bottom: 4px;
        border-radius:5px;
    }

    @media(max-width:768px){
        display:flex
    }

`
const Menu = styled.div`
display:flex;
justify-content: space-between;
position:relative;
align-items: center;

@media(max-width:768px){
    overflow:hidden;
    flex-direction:column;
    width:100%;
    max-height: ${({ isOpen }) => isOpen ? "300px" : "0"};
    transition:max-height 0.3s ease-in;
    
}

`
const MenuLink = styled.a`
    padding: 1rem 3rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    //font-weight: 500;
    font-size:0.9 rem;
    color:#95CD41;
    transition:all 0.3 ease-in;

    &:hover{
        color:#EA5C2B;
    }

`

export default Navbar