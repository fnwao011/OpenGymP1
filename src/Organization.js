import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Form, Button, Card } from 'react-bootstrap';
import pickup from './images/pickup.jpg';

class Organization extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <Title>Organize your game!</Title>

                    <Card style={{
                        width: '30rem', height: '25rem', background: '#95CD41'
                    }}>

                        <Card.Img variant="top" src={pickup} height='250px' width='20px' />
                        <div className='ContactForm'>
                            <div className='container'  >
                                <div className='row' style={{ padding: '2 rem' }}>
                                    <div className=' text-center'>
                                        <div className='contactForm'>
                                            <form id='contact-form' noValidate>
                                                {/* Row 1 of form */}
                                                <div className='row formRow' style={{ padding: '2rem' }}>
                                                    <div className='col-6'>
                                                        <input
                                                            type='date'
                                                            name='gameDate'
                                                            className='form-control formInput'
                                                            placeholder='Select Date'
                                                        ></input>
                                                    </div>
                                                    <div className='col-6'>
                                                        <Form.Select aria-label="Select League" placeholder='Select Opponent Team'>
                                                            <option>Select Opponent</option>
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

                                                <ResumeBtn className='submit-btn' type='submit' onClick={() => { alert('Confirmed') }}>
                                                    Submit
                                                </ResumeBtn>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </div >
        );
    }

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