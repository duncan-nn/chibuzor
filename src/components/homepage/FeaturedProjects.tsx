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
                        A curated selection of projects where conversion strategy meets purposeful engineering — built to reduce friction, influence user behavior, and turn digital experiences into measurable results.
                    </p>
                </div>
            </div>
            <div className='projects-container'>
               <div className='project'>
                    <div className='item-wrap'>
                        <div className='image-div'>
                            <div 
                            className='image'
                            style={{ backgroundImage: `url('${'/images/real-one.jpg'}')`,}}/>
                        </div>
                        <div className='details'>
                            <h1>Modern Real Estate Platform</h1>
                            <p>
                                A high-performance real estate website built with Next.js and WordPress, 
                                featuring advanced property search, dynamic listings, responsive design, 
                                and a seamless user experience optimized for lead generation and property discovery.
                            </p>
                            <div className='tech-stack'>
                                <span>React</span>
                                <span>NextJs</span>
                                <span>TypeScript</span>
                                <span>SCSS</span>
                                <span>Framer-Motion</span>
                            </div>
                            <div className='cta-wrap'>
                                <a 
                                href="https://oakline-nine.vercel.app/"
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


                <div className='project'>
                    <div className='item-wrap'>
                        <div className='image-div'>
                            <div 
                            className='image'
                            style={{ backgroundImage: `url('${'/images/oula.jpg'}')`,}}/>
                        </div>
                        <div className='details'>
                            <h1>Cosmetic Consultation Booking Optimization</h1>
                            <p>
                                A multi-step cosmetic consultation booking experience.
                                Improved user flow, real-time validation, optimized load performance, and simplified service selection.
                            </p>
                            <div className='tech-stack'>
                                <span>React</span>
                                <span>NextJs</span>
                                <span>TypeScript</span>
                                <span>SCSS</span>
                                <span>Framer-Motion</span>
                            </div>
                            <div className='cta-wrap'>
                                <a 
                                href="https://oula.vercel.app/"
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

                <div className='project'>
                    <div className='item-wrap'>
                        <div className='image-div'>
                            <div 
                            className='image'
                            style={{ backgroundImage: `url('${'/images/bottle-in-hand.jpg'}')`,}}/>
                        </div>
                        <div className='details'>
                            <h1>Organic Beauty Product Discovery Experience</h1>
                            <p>
                                Optimized product discovery ecommerce website. High-performance home, product listing, and product detail pages with advanced filtering systems.
                            </p>
                            <div className='tech-stack'>
                                <span>React</span>
                                <span>NextJs</span>
                                <span>TypeScript</span>
                                <span>Tailwind CSS</span>
                                <span>SCSS</span>
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