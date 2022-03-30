import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const logoUrl='https://webstockreview.net/images/clipart-restaurant-restaurant-logo-5.png';
    const bannerUrl='https://www.ftswebdesign.com/wp-content/uploads/2017/05/5D3_4637.jpg'
    return (
<div>
<nav className="navManu bg-violet-600 py-3 ">
<img src={logoUrl} className="h-16 w-16 " alt="" />
      <div >
      <Link to='/' className='manu'>Home</Link>
      <Link to='/employee' className='manu'>Employee</Link>
      <Link to='/search' className='manu'>Search</Link>
      </div>
 
  </nav>


<img src={bannerUrl} className="banner-img" alt="" />
<p className="copyRight ">Copy Right @ Md : Shihab Uddin</p>
</div>


    );
};

export default Header;