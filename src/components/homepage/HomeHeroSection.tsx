import React from 'react';
import Link from 'next/link';

function HomeHeroSection() {
  return (
    <div className='homehero-section'>
        <div className='wrapper'>
            <div className='name-wrap'>
                <div 
                className='image-div'
                style={{ backgroundImage: `url('${'/images/ck.jpg'}')`,}}/>
                <div className='name-stack'>
                    <h3 className='fullname'>Chibuzor Nnorom</h3>
                    <h3 className='role'>Digital Designer</h3>
                </div>
            </div>
            <div className='title-wrap'>
                <h1>Hi I&apos;m Chibuzor:</h1>
                <h1>AI Agent Consultant & Web Developer</h1>
            </div>
            <div className='desc-wrap'>
                <p>
                    CRO-focused Next.js developer building high-performance websites 
                    and AI-powered systems that convert visitors into customers.
                </p>
            </div>
            <div className='cta-wrap'>
                <div className='btn-wrap'>
                    <Link href="/#contact" className='btn-dark'>
                        Contact Me
                    </Link>
                </div>
                <div className='btn-wrap'>
                    <a 
                    href="/downloads/developer-designer-resume-chibuzor.pdf"
                    target="_blank"
                    className='btn-white'>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSection