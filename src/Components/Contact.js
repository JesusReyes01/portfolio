import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [emailBody, setEmail] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    //Error handling for rejected email
    const [showReject, setShowReject] = useState(false);
    //For email sent alert
    const [emailSent, setEmailSent] = useState(false);

    //Handles all input events
    const handleInput = (event) => {
        setEmail({...emailBody, [event.target.name]: event.target.value})
    }  

    //Assigns FontAwesome icons to variables
    const linkedInSquare = <FontAwesomeIcon icon={faLinkedin} size='3x' />
    const githubSquare = <FontAwesomeIcon icon={faGithubSquare} size='3x' />
    const emailSquare = <FontAwesomeIcon icon={faEnvelopeSquare} size='3x' />
    
    //Send email API call and resets state if successful
    const sendEmail = async(e) => {
        e.preventDefault();
        const {name, email, subject, message} = emailBody;
        await axios
            .post('/api/email', {name, email, subject, message})
            .then(() => {
                setEmailSent(true)
                setEmail({name: '', email: '', subject: '', message: ''})
            })
            .catch(err => {
                setShowReject(true)
                console.log(err)
            })     
    }
    return(
        <section id='contact' className='contact-section'>
            {showReject?
                <Alert className="email-alert" variant="danger" onClose={() => setShowReject(false)} dismissible>
                    <Alert.Heading>Oh snap!</Alert.Heading>
                      <p>Something went wrong. Please try again.</p>
                </Alert>:<></>
            }
            {emailSent?
                <Alert className="email-alert" variant="success" onClose={() => setEmailSent(false)} dismissible>
                    <Alert.Heading>Thank You!</Alert.Heading>
                      <p>I will get back to you ASAP!</p>
                </Alert>:<></>
            }
            <h2 className='contact-title'>CONTACT</h2>
            <p>I'd love to hear from you!</p>

            <Form onSubmit={sendEmail} className='email-form'>
                <Form.Group controlId="formBasicName">
                    <Form.Control value={emailBody.name} type="text" placeholder="Name" name='name' onChange={(e) =>  handleInput(e)} required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control value={emailBody.email} type="email" placeholder="Email" name='email' onChange={(e) =>  handleInput(e)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control value={emailBody.subject} type="text" placeholder="Subject" name='subject' onChange={(e) =>  handleInput(e)} required/>
                </Form.Group>
                <Form.Group >
                    <Form.Control value={emailBody.message} as="textarea" rows='6' placeholder="Message" name='message' onChange={(e) =>  handleInput(e)} required/>
                </Form.Group>
                {emailSent?
                <Form.Text className="confirmation-text">
                    Email Sent! Thank you!
                </Form.Text>:<></>}
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
            <div className='contact-icon-flex'>
                <div className='icon' ><a href='https://www.linkedin.com/in/jesusreyes01'>{linkedInSquare}</a></div>
                <div className='icon'><a href='https://github.com/JesusReyes01'>{githubSquare}</a></div>
                <div className='icon'><a href='mailto: me@jesusreyes.dev'>{emailSquare}</a></div>
            </div>
            <footer>CREATED BY: JESUS REYES</footer>
        </section>
    )

}

export default Contact;
