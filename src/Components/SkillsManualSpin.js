import React, {useState} from 'react';
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
import python from '../assets/skills/python.png'
import bootstrap from '../assets/skills/bootstrap.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    //State for spinning boolean
    const [spinning, setSpin] = useState(true);
    //State for Width to control carousel width
    const [currentWidth, setCurrentWidth] = useState();

    //Hook to add update to width state
    React.useEffect(() => {
        setCurrentWidth(window.innerWidth)
    },[window.innerWidth])

    // Z axis translate distance variable
    let tranZ;
    if (currentWidth < 599) {
        tranZ = 200;
    } else if (currentWidth >= 599 && currentWidth < 901) {
        tranZ = 429;
    } else if (currentWidth >= 901 && currentWidth < 1301) {
        tranZ = 522;
    } else {
        tranZ = 746;
    } 

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
        {name: 'PYTHON', img: python},
        {name: 'BOOTSTRAP', img: bootstrap}
    ]

    //Assigns icons to variables from FontAwesome package
    const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size='2x' />
    const chevronRight = <FontAwesomeIcon icon={faChevronRight} size='2x' />

    //Maps skill array inside component and adds JSX for individual cells
    const skillsMapped = skills.map((skill, i) => {
        return (
            <div className='carousel__cell' key={i}>
                <img className="skill-img" src={skill.img} alt={skill.name}/>
                <p>{skill.name}</p>
            </div>
        )
    })

    //selectedIndex used to spin carousel correctly in manual mode
    let selectedIndex = 0;
    const rotateCarousel = () => {
        let carousel = document.getElementById('skills-carousel');
        //Number of cells for carousel
        let cellCount = 12;
        let angle = selectedIndex / cellCount * -360;
        carousel.style.transform = `translateZ(-${tranZ}px) rotateY(${angle}deg)`;
    }
    
    //Function to stop carousel
    const stopCarousel = () => {
       let carousel = document.getElementById('skills-carousel');
        carousel.style.transform = `translateZ(-${tranZ}px)`;
        carousel.style.animation= 'none';
        setSpin(false)
    }

    //Function to start carousel
    const startCarousel = () => {
        let carousel = document.getElementById('skills-carousel');
        carousel.style.transform = `translateZ(-${tranZ}px)`;
        carousel.style.animation= 'spin 18s infinite linear';
        setSpin(true)
    }

    //Function for left arrow
    const next = () =>  {
        selectedIndex++;
        rotateCarousel();
    };

    //Function for right arrow
    const previous = () =>  {
        selectedIndex--;
        rotateCarousel();
    };

    return (
        <section id='skills' className='skills-section'>
            <h2 className='skills-title'>SKILLS</h2>
            <div className='carousel-flex'>
                {spinning?
                <></>
                :
                <button className="skills-left-arrow" onClick={previous}>{chevronLeft}</button>}
                <div className="stage">
                    <div id='skills-carousel'>
                        {skillsMapped}
                    </div>
                </div>
                {spinning?
                <></>
                :
                <button className="skills-right-arrow" onClick={next}>{chevronRight}</button>}
            </div>
            {spinning?
            <button className='btnr btn-two' onClick={stopCarousel}>STOP SPIN</button>
            :
            <button className='btnr btn-three' onClick={startCarousel}>START SPIN</button>
            }
        </section>
    )
}

export default Skills;