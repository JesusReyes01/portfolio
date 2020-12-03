import React from 'react';
import Button from 'react-bootstrap/Button';
import react from '../assets/skills/react.png'
import redux from '../assets/skills/redux.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import javascript from '../assets/skills/javascript.png'
import postgresql from '../assets/skills/postgresql.png'
import sass from '../assets/skills/sass.png'
import css3 from '../assets/skills/css3.png'
import html5 from '../assets/skills/html5.png'
import git from '../assets/skills/git.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const skills = [
        {name: 'REACT', img: react},
        {name: 'REDUX', img: redux},
        {name: 'JAVASCRIPT', img: javascript},
        {name: 'HTML5', img: html5},
        {name: 'CSS3', img: css3},
        {name: 'SASS', img: sass},
        {name: 'NODE', img: node},
        {name: 'EXPRESS', img: express},
        {name: 'POSTGRESQL', img: postgresql},
        {name: 'GIT', img: git},
    ]
    const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size='2x' />
    const chevronRight = <FontAwesomeIcon icon={faChevronRight} size='2x' />

    const skillsMapped = skills.map((skill, i) => {
        return (
            <div className='carousel__cell'>
                <img className="skill-img" src={skill.img} alt={skill.name}/>
                <p>{skill.name}</p>
            </div>
        )
    })

    let selectedIndex = 0;

    const rotateCarousel = () => {
        let carousel = document.querySelector('.carousel');
        let cellCount = 10;
  
        let angle = selectedIndex / cellCount * -360;
        carousel.style.transform = 'translateZ(-615.5px) rotateY(' + angle + 'deg)';
    }

    const previous = () =>  {
        selectedIndex--;
        rotateCarousel();
    };

    
    const next = () =>  {
        selectedIndex++;
        rotateCarousel();
    };

    return (
        <section id='skills' className='skills-section'>
            <h2 className='skills-title'>SKILLS</h2>
            <div className='carousel-flex'>
                <button className="skills-left-arrow" onClick={previous}>{chevronLeft}</button>
                <div className="stage">
                    <div class="carousel">
                        {skillsMapped}
                    </div>
                </div>
                <button className="skills-right-arrow" onClick={next}>{chevronRight}</button>
            </div>
            {/* <p className='skill-buttons-flex'>
                <Button className="skills-button" onClick={previous}>Previous</Button>
                <Button className="skills-button" onClick={next}>Next</Button>
            </p> */}
        </section>

    )
}

export default Skills;