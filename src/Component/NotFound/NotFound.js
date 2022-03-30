import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const errorImg='https://www.livewebtutors.com/img/404.png'
    return (
        <div>
       <img src={errorImg} className='error-img' alt="" />

       <Link to='/' className="rounded-full bg-fuchsia-700 border-2 py-3 px-8 defoult hover:bg-amber-600 ease-in duration-300 text-white" >Go to Home</Link>   
        </div>
    );
};

export default NotFound;