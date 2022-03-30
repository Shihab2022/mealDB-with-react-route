import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css'
const Details = () => {
    const [singleFood,setSingleFood] =useState([])
    const params =useParams()
    const id=(params.idMeal)
useEffect(() => {

    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setSingleFood(data.meals[0]))
},[])
// console.log(singleFood)
const {strMealThumb,strMeal,strSource,strArea,strInstructions,strYoutube}=singleFood

 
    return (
        <div className='detail py-20   px-24'>
            <img src={strMealThumb} alt="" className='h-full w-[95%] rounded-lg shadow-lg bg-slate-500' />
            <div>
            <h3 className='text-4xl my-1'>Name : {strMeal}</h3>
            <h4 className='text-3xl my-1'>Area : {strArea}</h4>
            <h4 className='text-3xl my-1'>Website : <a  className='text-xl ankor' href={strSource}>Website</a></h4>
            <h4 className='text-2xl my-1'>Youtube : <a  className='text-xl ankor' href={strYoutube}>Youtube</a></h4>
         <p className='text-2xl'>Details : <br/>
         <span className='text-xl'> {strInstructions}</span>
        
         </p>
         <div className="my-10">
         <Link to='/' className="rounded-full bg-fuchsia-700 border-2 py-3 px-8  hover:bg-amber-600 ease-in duration-300 text-white" >Go to Home</Link> 
         </div>
           
            </div>
        </div>
    );
};

export default Details;