import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Registration = () => {

    const [numOfPlayers, setPlayers] = useState(0);

    const navigate = useNavigate();

    const inputs = [];

    for (let i = 1; i <= numOfPlayers; i++) {
        inputs.push(
            <div className='row formRow' style={{ padding: '0.5rem' }}>
                <div className='col'>
                    <Form.Select aria-label="Select Team Format" onChange={e => {

                    }} >
                        <option>Select Player Position</option>
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
                    ></input>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Container>
                <Title>Register</Title>
                <div className='ContactForm'>
                    <div className='container'  >
                        <div className='row' style={{ padding: '0.5 rem' }}>
                            <div className=' text-center'>
                                <div className='contactForm'>
                                    <form id='contact-form' noValidate>
                                        {/* Row 1 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>
                                            <div className='col-6'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    className='form-control formInput'
                                                    placeholder='Name'
                                                ></input>
                                            </div>
                                            <div className='col-6'>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    className='form-control formInput'
                                                    placeholder='Email address'
                                                ></input>
                                            </div>
                                        </div>
                                        {/* Row 2 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>

                                            <div className='col'>
                                                <Form.Select aria-label="Select League" placeholder='Select Experience Level'>
                                                    <option>Select Type of League</option>
                                                    <option value="1">Rec League</option>
                                                    <option value="2">Open Court</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Experience Level" >
                                                    <option>Select Experience Level</option>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Advanced">Advanced</option>

                                                </Form.Select>
                                            </div>
                                            <div className='col'>
                                                <Form.Select aria-label="Select Team Format" onChange={e => {
                                                    setPlayers(parseInt(e.target.value, 10))
                                                }} >
                                                    <option>Select Team Format</option>
                                                    <option value='3'>3v3</option>
                                                    <option value="5">5v5</option>


                                                </Form.Select>
                                            </div>
                                        </div>

                                        {inputs}
                                        {/* Row 3 of form */}

                                        <ResumeBtn className='submit-btn' type='submit' onClick={() => { navigate('/OpenGymP1/organize') }}>
                                            Submit
                                        </ResumeBtn>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )

}




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

`
export default Registration