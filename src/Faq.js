import styled from 'styled-components';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Faq = () => {
    return (
        <div>
            <Container>

                <Title>FAQ</Title>
                <BodyText>Got a question but to shy to ask? Here you can see common questions other people have about our leagues and service.</BodyText>
                <Accordion defaultActiveKey="0" style={{ width: '60%', display: 'inline-block', padding: '1em' }}>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>Should I sign up for Rec or Open Gym?</Accordion.Header>
                        <Accordion.Body>
                            Rec League is more organised with score keeping and jerseys and  multiple scheduled games. OpenGym is just for flexible pick up games. Its a sign up for a one time game with no added equipment.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" >
                        <Accordion.Header>What's the competition Like?</Accordion.Header>
                        <Accordion.Body>
                            When signing up you can select your experience level. We have Beginner, Intermediate, and Advanced leagues for all players.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" >
                        <Accordion.Header>Do I need to bring anything to the Game?</Accordion.Header>
                        <Accordion.Body>
                            Nope! Just come with your shoes laced up and a piece of ID. Once you get to the gym well verify both teams and a ref will start the game once both teams are ready.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" >
                        <Accordion.Header>Is there a prize for winners?</Accordion.Header>
                        <Accordion.Body>
                            The winners of their respective Rec League win a trophy because it is a a league of scheduled games. OpenGym game winners do not win anything except bragging rights.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </Container>

        </div>
    )


}

const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items:center;

`
const Title = styled.h1`
font-size: 2.5rem;
color: #95CD41;
text-align: center;
margin-top: 2rem;
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

export default Faq;