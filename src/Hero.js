import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import baller from './images/baller.png'


const Hero = () => {

    return (
        <div class='hero'>
            <Container>
                <InnerWrapper>
                    <TitleWrapper>
                        <Title>Find a game anywhere, anytime!
                        </Title>
                        <NiceButton onClick={() => {

                        }}><HashLink to='/OpenGymP1/#about' style={{ textDecoration: 'none', color: 'white' }}>Learn More</HashLink></NiceButton>

                    </TitleWrapper>

                    <ImgWrapper>
                        <img src={baller} width='512px' height='512px' alt='hero image' />
                    </ImgWrapper>


                </InnerWrapper>


            </Container>
        </div>
    );
}

const Container = styled.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    
`
const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    

`
const TitleWrapper = styled.div`
    width:55%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 10px 20px;
    margin-left:1rem;

`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color:#FF7F3F;
    text-align: center;
    margin-bottom:2.5rem;;
   
  
    @media(max-width:768px){
        font-size:2rem;
    }

    @media(max-width:992px){
        font-size:3rem;
    }
    
`

const NiceButton = styled.a`
    width:20%;
    background-color: #EA5C2B;
    color:white;
    border: 1px solid #EA5C2B;
    border-radius: 10px;
    display:inline-block;
    padding: 10px 20px;
    text-decoration: none;
    
    transition: background-color 200ms ease-in-out;
    font-weight:700;
    margin-bottom:7rem;

    cursor:pointer;

    &:hover{
        background-color: #95CD41;
        color:white;
        border: 1px solid #95CD41;
    }


`
const ImgWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center
`

const HeroImg = styled.img`
    padding: 1 2rem;
    margin-left:5rem;

    @media(max-width:768px){
        padding: 0 1rem;
        margin-left:0;
    }
    

`

export default Hero
