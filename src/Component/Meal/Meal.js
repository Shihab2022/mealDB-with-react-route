import React from 'react';
import { Link } from 'react-router-dom';


const Meal = ({meal}) => {
    // console.log(meal)
    const {strMeal,strMealThumb,idMeal}=meal
  
    return (
       
           <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-96  rounded-lg py-4 flex  shadow-2xl items-center flex-col '>
         <img src={strMealThumb} className="h-3/4 w-5/6 rounded-lg "  alt="" /> 
         <h3 className="text-2xl text-yellow-50 text-clip my-4 px-0"> Name : {strMeal}</h3>  

         <Link to={`/search/${idMeal}`} className="rounded-full bg-fuchsia-200 border-2 py-1 px-5 hover:bg-fuchsia-700 ease-in duration-300 hover:text-white" >Details</Link>   
         </div> 
       
    );
};

export default Meal;