'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function FeaturedProjects() {
  return (
    <div className='featured-projects' id='work'>
        <div className='wrapper'>
            <div className='header'>
                <div className='left'>
                    <h1>Featured Project Showcase</h1>
                </div>
                <div className='right'>
                    <p>
                        A curated selection of projects where thoughtful design meets purposeful code—crafted to solve real problems and elevate digital experiences.
                    </p>
                </div>
            </div>
            <div className='projects-container'>
                <div className='project'>
                    <div className='item-wrap'>
                        <div className='image-div'>
                            <div 
                            className='image'
                            style={{ backgroundImage: `url('${'/images/bottle-in-hand.jpg'}')`,}}/>
                        </div>
                        <div className='details'>
                            <h1>Organic Beauty eCommerce Website</h1>
                            <p>
                                An organic beauty e-commerce platform designed to showcase clean formulations, intuitive shopping, and a seamless user experience across devices.
                            </p>
                            <div className='tech-stack'>
                                <span>React</span>
                                <span>NextJs</span>
                                <span>TypeScript</span>
                            </div>
                            <div className='cta-wrap'>
                                <a 
                                href="https://nileandroot.vercel.app/"
                                className="btn-dark-with-icon"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <span>View Live</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="icon-fa" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects