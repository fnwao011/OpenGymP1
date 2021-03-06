import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import RegistrationFR from './RegistrationFR';
import { render } from '@testing-library/react';


const Registration = () => {

    const [numOfPlayers, setPlayers] = useState(0);
    const [language, setLanguage] = useState("eng");


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }
        if (form.checkValidity() === true) {
            navigate('/OpenGymP1/organize')
        }
        setValidated(true);



    };


    const navigate = useNavigate();

    const inputs = [];

    for (let i = 1; i <= numOfPlayers; i++) {
        inputs.push(
            <div className='row formRow' style={{ padding: '0.5rem' }}>
                <div className='col'>
                    <Form.Select aria-label="Select Team Format" required onChange={e => {

                    }} >
                        <option value="">Select Player Position</option>
                        <option value='3'>Point Guard</option>
                        <option value="5">Shooting Guard</option>
                        <option value="5">Small Forward</option>
                        <option value="5">Power forward </option>
                        <option value="5">Center</option>


                    </Form.Select>
                </div>
                <div className='col'>
                    <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Name'
                        required
                    ></input>
                </div>
            </div>
        )
    }

    if (language == "fr") {
        return (
            <RegistrationFR />
        );
    }

    return (
        <div>
            <Footer>
                <BodyText>Chosose Language</BodyText>
                <BodyText >ENG</BodyText>
                <BodyText onClick={() => { setLanguage('fr') }}>FR</BodyText>
            </Footer>

            <Container>
                <Title>Register</Title>
                <ProgressBar animated variant='success' now={45} style={{ width: '40%', marginTop: '2em', marginBottom: '2em' }} />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='ContactForm'>
                        <div className='container'  >
                            <div className='row' style={{ padding: '0.5 rem' }}>
                                <div className=' text-center'>
                                    <div className='contactForm'>

                                        {/* Row 1 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>
                                            <div className='col-6'>
                                                <Form.Group >

                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Name"
                                                        minlength="2"

                                                    />

                                                </Form.Group>
                                            </div>
                                            <div className='col-6'>
                                                <Form.Group >

                                                    <Form.Control
                                                        required
                                                        type="email"
                                                        placeholder="Email"

                                                    />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        {/* Row 2 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>

                                            <div className='col'>
                                                <Form.Select aria-label="Select League" placeholder='Select Experience Level' required>
                                                    <option value="">Select Type of League</option>
                                                    <option value="1">Rec League</option>
                                                    <option value="2">Open Court</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Experience Level" required >
                                                    <option value="">Select Experience Level</option>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Advanced">Advanced</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Team Format" required onChange={e => {
                                                    setPlayers(parseInt(e.target.value, 10))
                                                }} >
                                                    <option value="">Select Team Format</option>
                                                    <option value='3'>3v3</option>
                                                    <option value="5">5v5</option>


                                                </Form.Select>
                                            </div>
                                        </div>

                                        {inputs}
                                        {/* Row 3 of form */}

                                        <ResumeBtn type="submit">Submit </ResumeBtn>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>

            </Container>


        </div >
    )

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
margin-top: 2rem;

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
justify-content: center;
align-items:center;

`

const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content:space-evenly;

`
const BodyText = styled.p`
    font-size:0.9rem;
    color: #EA5C2B;
    text-align:left;
    padding: 0 2rem;
    cursor: pointer;

    &:hover{
        color: #95CD41;
    }

    &:visited{
        color: #95CD41;
    }

    @media(max-width:768px){
        text-align:center;

    }
    
    
`

export default Registration