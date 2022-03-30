import React from 'react';
import { Link } from 'react-router-dom';
import './SingleEmployee.css'

const SingleEmployee = ({employ}) => {
    const {name,email,picture}=employ;
    const {title,first,last}=name;
    const img =picture.large
    // console.log(employ)
    return (
        <div>
         <div className="employee border-2 border-violet-400 shadow-lg py-4 px-2 rounded-lg">
             <img src={img} className="h-20 w-20 rounded-full" alt="" />
             <div>
             <h2>Name : {title} {first} {last}</h2>
             <p className="mb-3">Email : {email}</p>
             <Link to='/'  className="rounded-full bg-amber-600 border-2 py-1 px-4  hover:bg-fuchsia-700 ease-in duration-300 text-white ">Details</Link>
             </div>
            
         </div>
        </div>
    );
};

export default SingleEmployee;