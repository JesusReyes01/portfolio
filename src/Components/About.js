import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const linkedInSquare = <FontAwesomeIcon icon={faLinkedin} size='3x' />
    const githubSquare = <FontAwesomeIcon icon={faGithubSquare} size='3x' />
    const emailSquare = <FontAwesomeIcon icon={faEnvelopeSquare} size='3x' />

    return(
        <section id='about' className='about-section'>
            <div className='about-main-text'>
                <h2 className='about-text'>WEB DEVELOPER</h2>
                <div className='icon-flex'>
                    <div className='icon' ><a href='https://www.linkedin.com/in/jesusreyes01'>{linkedInSquare}</a></div>
                    <div className='icon'><a href='https://github.com/JesusReyes01'>{githubSquare}</a></div>
                    <div className='icon'><a href='mailto: me@jesusreyes.dev'>{emailSquare}</a></div>
                </div>
            </div>
        </section>
    )

}
export default About;