import React, {useState} from 'react';

const Header = () => {
    // const[hidden, setHidden] = useState(true);
    // const menu = (
    //     <>
    //         <div className='index'><a id='nav-home' href='#'>HOME</a></div>
    //         <div className='index'><a id='nav-skills' href='#skills'>SKILLS</a></div>
    //         <div id='nav-projects' className='index'><a href='#projects'>PROJECTS</a></div>
    //         <div id='nav-contact' className='index'><a href='#contact'>CONTACT</a></div>
    //     </>
    // );
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let homeLink = document.getElementsByClassName("home")[0]
        let skillsLink = document.getElementsByClassName("skills")[0]
        let projectsLink = document.getElementsByClassName("projects")[0]
        let contactLink = document.getElementsByClassName("contact")[0]
        if (currentScrollPos > 530 && currentScrollPos < 1280) {
            document.getElementById("navbar").style.top = "0";
            homeLink.classList.add('yellow')
            skillsLink.classList.add('white')
            projectsLink.classList.remove('white')
        } 
        else if (currentScrollPos > 1280){
            document.getElementById("navbar").style.top = "0";
            skillsLink.classList.remove('white')
            projectsLink.classList.add('white')
            
        }
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