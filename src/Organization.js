import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Form, Button, Card, ProgressBar, Alert } from 'react-bootstrap';
import pickup from './images/pickup.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Organization = () => {
    const [show, setShow] = useState(false)

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }
        if (form.checkValidity() === true) {
            setShow(true)
        }
        setValidated(true);



    };

    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} >
                <Alert.Heading>Your game has been organized!</Alert.Heading>
                <p>
                    Check you email for confirmation. We will also email you further information closer to the date of your game
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => navigate('/OpenGymP1/')} variant="outline-success">
                        Go Home!
                    </Button>
                </div>
            </Alert>
        );
    }


    return (


        <div>
            <Container>
                <Title>Organize your game!</Title>
                <ProgressBar animated variant='success' now={90} style={{ width: '40%', marginTop: '1.5em', marginBottom: '1.5em' }} />
                <Card style={{
                    width: '30rem', height: '25rem', background: '#95CD41'
                }}>

                    <Card.Img variant="top" src={pickup} height='250px' width='20px' />
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <div className='ContactForm'>
                            <div className='container'  >
                                <div className='row' style={{ padding: '2 rem' }}>
                                    <div className=' text-center'>
                                        <div className='contactForm'>

                                            {/* Row 1 of form */}
                                            <div className='row formRow' style={{ padding: '2rem' }}>
                                                <div className='col-6'>
                                                    <input
                                                        type='date'
                                                        name='gameDate'
                                                        className='form-control formInput'
                                                        placeholder='Select Date'
                                                        required

                                                    ></input>
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Select aria-label="Select League" placeholder='Select Opponent Team' required>
                                                        <option value="" >Select Opponent</option>
                                                        <option value="1">Shanghai Sharks</option>
                                                        <option value="2">Orlando Magic</option>

                                                    </Form.Select>
                                                </div>
                                            </div>
                                            {/* Row 2 of form */}
                                            <div className='row formRow' style={{ padding: '2 rem' }}>

                                                <div className='col'>

                                                </div>
                                                <div className='col'>

                                                </div>
                                                <div className='col'>

                                                </div>
                                            </div>


                                            {/* Row 3 of form */}

                                            <ResumeBtn className='submit-btn' type='submit'>
                                                Submit
                                            </ResumeBtn>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div >
    );

}



const ResumeBtn = styled.button`
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

const Title = styled.h1`
font-size: 2.5rem;
color: #95CD41;
text-align: center;
margin-top: 0.8rem;

@media(max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 0;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
align-items:center;

`

export default Organization;