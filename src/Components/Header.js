import React from 'react';

const Header = () => {

    //Checks the Y coordinate and changes pop up menu when scrolling down
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let currentWidth = window.innerWidth;
        let skillsLink = document.getElementsByClassName("skills")[0]
        let projectsLink = document.getElementsByClassName("projects")[0]
        let contactLink = document.getElementsByClassName("contact")[0]

        let skillsStart;
        let projectsStart;
        let contactStart;

        //Mobile phone 
        if (currentWidth < 599) {
            skillsStart = 665;
            projectsStart = 1220;
            contactStart = 3790;
        } 
        //Tablet
        else if (currentWidth >= 599 && currentWidth < 901) {
            skillsStart = 990;
            projectsStart = 1595;
            contactStart = 4625;
        } 
        //Desktop
        else if (currentWidth >= 901 && currentWidth < 1301) {
            skillsStart = 870;
            projectsStart = 1650;
            contactStart = 5015;
        } 
        //Wide Screen
        else {
            skillsStart = 830;
            projectsStart = 1650;
            contactStart = 4865;
        }
        //Changes SKILLS menu link to white
        if (currentScrollPos >= skillsStart && currentScrollPos < projectsStart) {
            document.getElementById("navbar").style.top = "0";
            skillsLink.classList.add('white')
            projectsLink.classList.remove('white')
            contactLink.classList.remove('white')
        } 
        //Changes PROJECTS menu link to white
        else if (currentScrollPos >= projectsStart && currentScrollPos < contactStart){
            document.getElementById("navbar").style.top = "0";
            skillsLink.classList.remove('white')
            projectsLink.classList.add('white')
            contactLink.classList.remove('white')
        }
        //Changes CONTACT menu link to white
        else if (currentScrollPos >= contactStart){
            document.getElementById("navbar").style.top = "0";
            skillsLink.classList.remove('white')
            projectsLink.classList.remove('white')
            contactLink.classList.add('white')
        }
        //Hides menu bar
        else {
                document.getElementById("navbar").style.top = "-50px";
        }
    }

    
    return(
        <header id='home' className='header-section'>
            <div className='header-inner'>
                <h1 className='site-title'><a href='https://jesusreyes.dev'>JESUS REYES</a></h1>
                <nav className='main-nav'>
                    <div className='index'><a href='#' id='nav-home'>HOME</a></div>
                    <div className='index'><a href='#skills'>SKILLS</a></div>
                    <div className='index'><a href='#projects'>PROJECTS</a></div>
                    <div className='index'><a href='#contact'>CONTACT</a></div>
                </nav>

                <nav id='navbar' className='floating-nav'>
                    <div className='index'><a className='home' href='#'>HOME</a></div>
                    <div className='index'><a className='skills' href='#skills'>SKILLS</a></div>
                    <div className='index'><a className='projects' href='#projects'>PROJECTS</a></div>
                    <div className='index'><a className='contact' href='#contact'>CONTACT</a></div>
                </nav>
            </div>
        </header>
    )
}

export default Header;