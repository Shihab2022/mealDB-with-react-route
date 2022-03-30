import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Search.css'

const Search = () => {

    const [searchText,setSearchText] =useState('')
const [meals,setMeals]=useState([])

useEffect(() => {
const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
fetch(url)
.then(res=>res.json())
.then(data=>setMeals(data.meals))
}, [searchText])
// console.log(meals)
    const searchFood =e=>{
        setSearchText(e.target.value)

    }
    // console.log(searchText)
    return (
        <div className="px-20">
            <h1 className="text-4xl">Search your favorite food !!!</h1>
            <input onChange={searchFood} type="text" className='border-violet-600 py-1 px-16 border-2 my-5 text-red-900 text-sm rounded-lg' placeholder="Search your favorite food "/>
            <div className='search gap-5  p-5'>
            {
             meals.map(meal =><Meal meal={meal} key={meal.idMeal}></Meal>)
            }
            </div>

        </div>
    );
};

export default Search;