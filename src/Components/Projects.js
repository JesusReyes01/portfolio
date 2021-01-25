import React from 'react';
import {imgDir} from '../assets/projects/imgDir';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {

    const scanGoImgMapped = imgDir.projects.scango.map((img, i) => {
        return(
            <Carousel.Item key={i}>
                <img
                    className="w-101"
                    src={img}
                    alt={`slide${i}`}
                />
            </Carousel.Item>
            )
        }
    )

    const journalizeImgMapped = imgDir.projects.journalize.map((img, i) => {
        return(
            <Carousel.Item key={i}>
                <img
                    className="w-1000"
                    src={img}
                    alt={`slide${i}`}
                />
            </Carousel.Item>
            )
        }
    )

    const pixelArtImgMapped = imgDir.projects.pixelArt.map((img, i) => {
        return(
            <Carousel.Item key={i}>
                <img
                    className="w-201"
                    src={img}
                    alt={`slide${i}`}
                />
            </Carousel.Item>
            )
        }
    )


    return(
        <section id='projects' className='projects-section'>
            <h2 className='projects-title'>PROJECTS</h2>

            <article className='scango'>
                <h2>Scan & Go</h2>
                <p><strong>Context:</strong> Devmountain Group Project with 2 week time limit. 
                    The goal was to make a full stack site that is intuitive, user friendly, and engaging while working on a team.</p>
                <p><strong>Description:</strong> Scan&Go is a site that allows shoppers to use their phones to scan items then pay on their device. An 'exit pass' is 
                    generated and a user can view purchase history.</p>
                <p><strong>Login credentials:</strong> Email: test@gmail.com Password: test , or feel free to register a new user.</p>
                <p><strong>Test barcodes/UPC:</strong> 9780979305061, 9781594631870, 9780349411903, 9780439662093 </p>
                <p><strong>Checkout process:</strong> Test credit card number is 4242 4242 4242 4242, Enter any future date for expiration and CV and zip code can be any number.</p>
                <div className='project-links'>
                    <a href="https://scanandgo.jesusreyes.dev/">DEMO</a>
                    <a href="https://github.com/Mobile-check-out-team/mobile-checkout">SOURCE</a>
                </div>
                <Carousel className='scanGoCarousel'>
                    {scanGoImgMapped}
                </Carousel>
            </article>

            <article className='journalize'>
                <h2>Journalize</h2>

                <p><strong>Context:</strong> Devmountain Personal Project with 2 week time limit. The goal 
                    was to make a full stack site that is fun, responsive, and easy to navigate.</p>
                <p><strong>Description:</strong> Journalize is a private online journal/diary-hosting website. Users can create 
                    written entries similar to a standard personal journal.</p>
                <p><strong>Login credentials:</strong> Email: test@gmail.com Password: test , or feel free to register a new user.</p>
                
                <div className='project-links'>
                    <a href="https://journalize.jesusreyes.dev/">DEMO</a>
                    <a href="https://github.com/JesusReyes01/journalize">SOURCE</a>
                </div>
                
                <Carousel className='journalizeCarousel'>
                    {journalizeImgMapped}
                </Carousel>
            </article>

            <article className='pixelArt'>
                <h2>Pixal Art</h2>
                
                <p><strong>Description:</strong>  Pixel Art is free online pixel drawing tool that allows you to make pixel art.</p>

                <div className='project-links'>
                    <a href="https://pixelart.jesusreyes.dev/">DEMO</a>
                    <a href="https://github.com/JesusReyes01/Pixel-Art-React">SOURCE</a>
                </div>
                <Carousel className='pixelArtCarousel'>
                    {pixelArtImgMapped}
                </Carousel>
            </article>

            <article className='portfolio'>
                <p>View this portfolio site's source code on <a href='https://github.com/JesusReyes01/portfolio'>GitHub</a></p>

            </article>
            
        </section>
    )
}
export default Projects;