'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  return (
    <div className='footer' id='contact'>
      <div className='footer-inner'>
          <div className='left'>
            <h1>Let&apos;s work together.</h1>
          </div>
          <div className='right'>
            <a
            className="item"
            href="https://www.instagram.com/chibuzor.tech/"
            target="_blank"
            rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  <span className='text'>chibuzor.tech</span>
            </a>
            <a
            className="item"
            href="https://www.linkedin.com/in/nnorom-duncan/"
            target="_blank"
            rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                  <span className='text'>chibuzor</span>
            </a>
            <a
            className="item"
            href="mailto:hello@twopointsstudio.com"
            target="_blank"
            rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                  <span className='text'>chibuzor@twopointsstudio.com</span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Footer