import React from 'react';
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

const Skills = () => {

    const skills = [
        {name: 'REACT', img: react},
        {name: 'REDUX', img: redux},
        {name: 'JAVASCRIPT', img: javascript},
        {name: 'PYTHON', img: python},
        {name: 'HTML5', img: html5},
        {name: 'CSS3', img: css3},
        {name: 'SASS', img: sass},
        {name: 'BOOTSTRAP', img: bootstrap},
        {name: 'NODE', img: node},
        {name: 'EXPRESS', img: express},
        {name: 'POSTGRESQL', img: postgresql},
        {name: 'GIT', img: git},
    ]

    const skillsMapped = skills.map((skill, i) => {
        return (
            <div className='carousel__cell' key={i}>
                <img className="skill-img" src={skill.img} alt={skill.name}/>
                <p>{skill.name}</p>
            </div>
        )
    })

    return (
        <section id='skills' className='skills-section'>
            <h2 className='skills-title'>SKILLS</h2>
            <div className='carousel-flex'>
                <div className="stage">
                    <div id='skills-carousel'>
                        {skillsMapped}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;