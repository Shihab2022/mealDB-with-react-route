import React, { useEffect, useState } from 'react';
import SingleEmployee from '../SingleEmployee/SingleEmployee';
import './Employee.css'
const Employee = () => {

    const [employers,setEmployers] =useState([])

    useEffect(() =>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res=>res.json())
        .then(data=>setEmployers(data.results))
         },[])

    // console.log(employers)
    return (
        <div className="px-20">
            <h1 className="text-center text-5xl my-10 text-red text-purple-600">Our Employee</h1>
            <div className="employee">
            {
                employers.map(employ=> <SingleEmployee employ={employ} key={employ.login.uuid}></SingleEmployee>)
            }
            </div>

          
        </div>
    );
};

export default Employee;