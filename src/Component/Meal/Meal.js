import React from 'react';

const Meal = ({meal}) => {
    // console.log(meal)
    const {strMeal,strMealThumb}=meal
    return (
       
           <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-96  rounded-lg py-4 flex  shadow-2xl items-center flex-col '>
         <img src={strMealThumb} className="h-3/4 w-5/6 rounded-lg "  alt="" /> 
         <h3>{strMeal}</h3>     
         </div> 
       
    );
};

export default Meal;