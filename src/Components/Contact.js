import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
    const [emailBody, setEmail] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [showReject, setShowReject] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleInput = (event) => {
        setEmail({...emailBody, [event.target.name]: event.target.value})
    }  
    

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
                      <p>I will reply ASAP!</p>
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
        </section>
    )

}

export default Contact;
