import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import './Gamestyle.css';
import { useNavigate } from "react-router-dom";
import p1 from './images/5v5.jpg';
import p2 from './images/3v3.jpg';
import p3 from './images/5v52.jpg';
import p4 from './images/3v32.jpg';

const GamePage = () => {

    const navigation = useNavigate();

    return (
        <section id='games'>
            <Container>
                <Title>Our games!</Title>
                <SubTitle> Differenct between Rec League and Open Couort?
                </SubTitle>
                <BodyText>Rec League is organized with the team you sign up and is against other rec players. Open Gym is more flexible and is for everyone.</BodyText>
                <RecWrapper>

                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={p1} />
                        <Card.Body>
                            <Card.Title>RecLeague 5v5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='gameButton' onClick={() => { navigation('/OpenGymP1/register') }}>Register</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{
                        width: '15rem', marginLeft: '2rem '
                    }}>
                        <Card.Img variant="top" src={p2} />
                        <Card.Body>
                            <Card.Title>RecLeague 3v3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='gameButton' onClick={() => { navigation('/OpenGymP1/register') }}>Register</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', marginLeft: '2em ' }}>
                        <Card.Img variant="top" src={p3} />
                        <Card.Body>
                            <Card.Title>OpenGym 5v5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='gameButton' onClick={() => { navigation('/OpenGymP1/register') }}>Register</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', marginLeft: '2em ' }}>
                        <Card.Img variant="top" src={p4} />
                        <Card.Body>
                            <Card.Title>OpenGym 3v3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='gameButton' onClick={() => { navigation('/OpenGymP1/register') }}>Register</Button>
                        </Card.Body>
                    </Card>
                </RecWrapper>

            </Container>
        </section>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;
  
`
const RecWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:2rem;


`

const Title = styled.h1`
    font-size:2.5rem;
    color:#FF7F3F;
    text-align:center;


    @media(max-width:768px){
        font-size:1.7rem;
        margin-bottom:0;
    }

`
const SubTitle = styled.h5`
    color:#95CD41;
    text-align:center;


    @media(max-width:768px){
        font-size:1.7rem;
        margin-bottom:0;
    }

`

const BodyText = styled.p`
    font-size:0.9rem;
    color:white;
    text-align:center;
    padding: 0 2rem;
    color:#95CD41;

    @media(max-width:768px){
        text-align:center;
    }
    
    
`


export default GamePage;