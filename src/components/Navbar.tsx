import Link from 'next/link';
import React from 'react';

function Navbar() {

  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <div className='nav-left-brand'>
          <div 
          className='logo-icon'
          style={{ backgroundImage: `url('${'/images/c-logo2b.png'}')`,}}/>
          <h3>Nnorom</h3>
        </div>
        <div className='nav-left-status'>
          <div className='status-circle'></div>
          <h4>Available</h4>
        </div>
      </div>
      <div className='nav-center'></div>
      <div className='nav-right'>
        <Link href={'/#contact'} className='nav-right-link'>Contact</Link>
        <Link href={'/#work'} className='nav-right-link last'>Work</Link>
      </div>
    </div>
  )
}

export default Navbar