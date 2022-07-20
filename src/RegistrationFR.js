import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Registration from './Registration';
import { render } from '@testing-library/react';


const RegistrationFR = () => {

    const [numOfPlayers, setPlayers] = useState(0);
    const [language, setLanguage] = useState("fr");


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
                        <option value="">Choisissez la position du joueur</option>
                        <option value='3'>Meneur</option>
                        <option value="5">SGarde de tir</option>
                        <option value="5">Petit attaquant</option>
                        <option value="5">Puissance avant</option>
                        <option value="5">Centre</option>


                    </Form.Select>
                </div>
                <div className='col'>
                    <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Nom'
                        required
                    ></input>
                </div>
            </div>
        )
    }

    if (language == "eng") {
        return (
            <Registration />
        );
    }

    return (
        <div>
            <Footer>
                <BodyText>Choisissez la langue</BodyText>
                <BodyText onClick={() => { setLanguage("eng") }}>ENG</BodyText>
                <BodyText>FR</BodyText>
            </Footer>

            <Container>
                <Title>Inscrire</Title>
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
                                                        placeholder="Nom"

                                                    />

                                                </Form.Group>
                                            </div>
                                            <div className='col-6'>
                                                <Form.Group >

                                                    <Form.Control
                                                        required
                                                        type="email"
                                                        placeholder="E-mail"

                                                    />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        {/* Row 2 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>

                                            <div className='col'>
                                                <Form.Select aria-label="Select League" placeholder='Select Experience Level' required>
                                                    <option value="">Choisissez le type de ligue</option>
                                                    <option value="1">Ligue récréative</option>
                                                    <option value="2">Audience publique</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Experience Level" required >
                                                    <option value="">Choisissez le niveau d'expérience</option>
                                                    <option value="Beginner">Débutant</option>
                                                    <option value="Intermediate">Intermédiaire</option>
                                                    <option value="Advanced">Avancé</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Team Format" required onChange={e => {
                                                    setPlayers(parseInt(e.target.value, 10))
                                                }} >
                                                    <option value="">Choisissez le format de l'équipe</option>
                                                    <option value='3'>3v3</option>
                                                    <option value="5">5v5</option>


                                                </Form.Select>
                                            </div>
                                        </div>

                                        {inputs}
                                        {/* Row 3 of form */}

                                        <ResumeBtn className='submit-btn' type='submit'>
                                            Soumettre
                                        </ResumeBtn>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>

            </Container>


        </div>
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

export default RegistrationFR