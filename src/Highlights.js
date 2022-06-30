
import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Navbar from './Navbar';

const Highlights = () => {



    return (
        <div>
            <Container>
                <TextWrapper>
                    <Title>Highlights!</Title>
                    <BodyText> Our gallery of highlights is right here! You can watch amazing basketball games that we have organized</BodyText>
                </TextWrapper>


                <InnerWrapper>
                    <ReactPlayer width='400px' height='200px' url='https://www.youtube.com/watch?v=0sOqB43XO8Y' />
                    <ReactPlayer width='400px' height='200px' url='https://www.youtube.com/watch?v=bYsshPt3_zE' />
                    <ReactPlayer width='400px' height='200px' url='https://www.youtube.com/watch?v=rq8eYdzJJOU' />
                </InnerWrapper>

                <InnerWrapper>
                    <ReactPlayer width='400px' height='250px' url='https://www.youtube.com/watch?v=fHl9_yN6t7E' />
                    <ReactPlayer width='400px' height='250px' url='https://www.youtube.com/watch?v=8PL9yxR90XI' />
                    <ReactPlayer width='400px' height='250px' url='https://www.youtube.com/watch?v=skWOFtcuZdg' />
                </InnerWrapper>


            </Container>
        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    
    justify-content:space-between;

    
`
const Title = styled.h1`
    font-size:2.5rem;
    color:#95CD41;
    text-align:center;
    margin-top:2rem;

    @media(max-width:768px){
        font-size:1.7rem;
        margin-bottom:0;
    }
    
`
const InnerWrapper = styled.div`
    flex-direction:row;
    display:flex;
    justify-content:space-evenly;
    margin-top:0.5rem;

`
const TextWrapper = styled.div`
    flex-direction:column;
    display:flex;
    align-items:center;
    margin-bottom:2rem;

`

const BodyText = styled.p`
    font-size:0.9rem;
    color: #EA5C2B;
    text-align:left;
    padding: 0 2rem;

    @media(max-width:768px){
        text-align:center;

    }
    
    
`



export default Highlights;