import React from 'react';
//import './Navbar.css'
function Navbar() {
  return (
    <div>
     
      <div>
      <ul className='nav-list'>
      <li className='logo'><img src='https://okstartups.com/' alt=''/></li>
      
      <li className='logo-title'><h2>OKstartups</h2></li>
            <li><a href="www.google.com">Home</a></li>
            <li><a href="#">ContactUs</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">GetStarted</a></li>
            <li><a href="#">Help</a></li>
           
        </ul>
      </div>
    </div>
  )
}

export default Navbar
