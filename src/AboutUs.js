import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import founder from './images/founder.jpg';


const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <section id='about'>

            <Container>
                <Title>
                    Get to know us!
                </Title>
                <InnerWrapper>
                    <Left>
                        <ImageWrapper>

                            <Profile width='509' height='300' src={founder} alt='pickup'></Profile>
                            <BodyText>Founder- Matthias Smith</BodyText>
                        </ImageWrapper>

                    </Left>

                    <Right>
                        <BodyText>
                            <ContentWrapper>
                                Our founder Matthias was an avid basketball fan and player, but h always seemed to runinto one issue. He could never find a proper pickup basketball game. He would go from gym to gym until he realized he had the solution himself. So, in 2022 he decided to develop a platform where people could find a pick up game any time and anywhere.  Whether its 3v3 or 5v5 we made it our mission to made sure there was a place where avid fans could play. Anywhere, Anytime! You can click below to watch highlights of moments we have created with our platform.

                            </ContentWrapper>
                        </BodyText>
                        <ResumeBtn target="_blank" onClick={() => { navigate('/OpenGymP1/highlights') }}>Game Highlights</ResumeBtn>
                    </Right>
                </InnerWrapper>

            </Container>
        </section>
    );
}

const Container = styled.div`
    display: flex;
    background-color:#95CD41;
    flex-direction:column;
    flex-wrap:wrap;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @media(max-width:768px){
    -webkit-clip-path: none;
    clip-path: none;
  }
    
    
 
    
`

const InnerWrapper = styled.div`
    display:flex;
    margin-top:3rem;

    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
   
    
`
const Title = styled.h1`
    font-size:2.5rem;
    color:white;
    text-align:center;
    margin-top:2rem;

    @media(max-width:768px){
        font-size:1.7rem;
        margin-bottom:0;
    }
    
`

const Left = styled.div`
    width:50%;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:auto;
    }
`

const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:768px){
        
        width:auto;
    }
`

const BodyText = styled.p`
    font-size:0.9rem;
    color:white;
    text-align:left;
    padding: 0 2rem;

    @media(max-width:768px){
        text-align:center;
    }
    
    
`
const ImageWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const ContentWrapper = styled.div`
  
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;

   
   

`
const Profile = styled.img`
    padding: 1 2rem;
    margin-left:5rem;

    @media(max-width:768px){
        padding: 0 1rem;
        margin-left:0;
    }
    

`

const ResumeBtn = styled.a`
    background-color: #EA5C2B;
    color:white;
    border: 1px solid #EA5C2B;
    border-radius: 10px;
    display:inline-block;
    text-decoration: none;
   
    font-weight:700;
    padding:0.5rem 1rem;
    
    font-size:0.9rem;

    cursor: pointer;

    

    &:hover{
        transform: translateY(-0.25em);
        box-shadow: 0 0.3rem 0.5rem -0.4rem #3CB371;
        text-decoration: none;
        color:white;
    }
`



export default AboutUs;