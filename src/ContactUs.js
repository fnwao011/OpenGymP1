import React from 'react';
import styled from 'styled-components';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { render } from '@testing-library/react';



const ContactUs = () => {

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

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



    }

    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible >
                <Alert.Heading>Message Sent!</Alert.Heading>
                <p>
                    Thank you for getting in on contact with us. We appreciate you taking the time to do that. We wil respond as soon as possible!
                </p>


            </Alert>
        );
    }



    return (
        <section id='contact'>
            <Container>
                <Title>Get in touch!</Title>
                <BodyText> Communication and transparency is our companies biggest values. If you have any questions do not hesitate to reach out.</BodyText>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='ContactForm'>
                        <div className='container'  >
                            <div className='row' style={{ padding: '2rem' }}>
                                <div className='col-12 text-center'>
                                    <div className='contactForm'>

                                        {/* Row 1 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>
                                            <div className='col-6'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    className='form-control formInput'
                                                    placeholder='Name'
                                                    required
                                                ></input>
                                            </div>
                                            <div className='col-6'>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    className='form-control formInput'
                                                    placeholder='Email address'
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        {/* Row 2 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>
                                            <div className='col'>
                                                <input
                                                    type='text'
                                                    name='subject'
                                                    className='form-control formInput'
                                                    placeholder='Subject'
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        {/* Row 3 of form */}
                                        <div className='row formRow' style={{ padding: '0.5rem' }}>
                                            <div className='col'>
                                                <textarea
                                                    rows={3}
                                                    name='message'
                                                    className='form-control formInput'
                                                    placeholder='Message'
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <ResumeBtn className='submit-btn' type='submit' >
                                            Submit
                                        </ResumeBtn>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>

            </Container>
        </section >
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

const BodyText = styled.p`
    font-size:0.9rem;
    color:white;
    text-align:left;
    padding: 0 2rem;

    @media(max-width:768px){
        text-align:center;
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

const Container = styled.div`
    display: flex;
    background-color:#95CD41;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
 
`
export default ContactUs;