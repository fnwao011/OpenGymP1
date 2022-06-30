import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';




const ContactUs = () => {


    return (
        <section id='contact'>
            <Container>
                <Title>Get in touch!</Title>
                <BodyText> Communication and transparency is our companies biggest values. If you have any questions do not hesitate to reach out.</BodyText>

                <div className='ContactForm'>
                    <div className='container'  >
                        <div className='row' style={{ padding: '2rem' }}>
                            <div className='col-12 text-center'>
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
                                                <input
                                                    type='text'
                                                    name='subject'
                                                    className='form-control formInput'
                                                    placeholder='Subject'
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
                                                ></textarea>
                                            </div>
                                        </div>
                                        <ResumeBtn className='submit-btn' type='submit' onClick={() => { alert('Thank You For Contacting') }}>
                                            Submit
                                        </ResumeBtn>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
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