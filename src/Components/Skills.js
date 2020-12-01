import React from 'react';
// const react = require(`../assets/skills/react.png`);
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

const Skills = () => {
    const skills = [
        {name: 'REACT', img: react},
        {name: 'REDUX', img: redux},
        {name: 'NODE', img: node},
        {name: 'EXPRESS', img: express},
        {name: 'JAVASCRIPT', img: javascript},
        {name: 'POSTGRESQL', img: postgresql},
        {name: 'SASS', img: sass},
        {name: 'CSS3', img: css3},
        {name: 'HTML5', img: html5},
        {name: 'GIT', img: git},
    ]
    // const img = require(`../assets/skills/react.png`)

    const skillsMapped = skills.map((skill, i) => {
        return (
            <li key={i}>
                <figure className='skill-container'>
                    <img className='skill-img' src={skill.img} alt={skill.name}/>
                    <figcaption>
                        {skill.name}
                    </figcaption>
                </figure>
            </li>
        )
    })
    // console.log(skillsMapped)

    return (
        <section id='skills' className='skills-section'>
            <h2 className='skills-title'>SKILLS</h2>
            <ul className='skills-list'>
                {skillsMapped}
            </ul>
            {/* <button>begin <img alt='gitss' src={require('./git.png')}/></button>
            <button>begin <img alt='git' src={require('../assets/skills/git.png')}/></button> */}

        </section>

    )
}

export default Skills;