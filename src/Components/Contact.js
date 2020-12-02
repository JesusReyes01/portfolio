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

    const handleInput = (event) => {
        setEmail({...emailBody, [event.target.name]: event.target.value})
    }  
    

    const sendEmail = async(e) => {
        e.preventDefault();
        const {name, email, subject, message} = emailBody;
        await axios
            .post('/api/email', {name, email, subject, message})
            .then(() => {
                alert('email sent!')
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
                      <p>Email is not on file</p>
                </Alert>:<></>
            }
            <h2>CONTACT</h2>
            <p>I'd love to hear from you!</p>

            <Form onSubmit={sendEmail} className='email-form'>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" name='name' onChange={(e) =>  handleInput(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" name='email' onChange={(e) =>  handleInput(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject" name='subject' onChange={(e) =>  handleInput(e)} />
                </Form.Group>
                <Form.Group >
                    <Form.Control className='form-message' as="textarea" rows='6' placeholder="Message" name='message' onChange={(e) =>  handleInput(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </section>
    )

}

export default Contact;
