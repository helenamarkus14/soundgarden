import React from 'react';
import { NavLink } from 'react-router-dom';
import ConcertEdit from '../ConcertEdit';
import ConcertView from '../ConcertView';

const ConcertCard = (props) => {

  const name = localStorage.getItem("id");
  return (
    <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
        <h3 className="mb-2 px-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.artist}</h3>
        <h3 className="mb-3 px-7 font-normal text-gray-700 dark:text-gray-400">Date: {props.month}, {props.day}, {props.year}</h3>
        <h3 className="mb-3 px-7 font-normal text-gray-700 dark:text-gray-400">Venue: {props.venue}</h3>
        <NavLink to={`/concerts/${name}/${props.id}`} 
        element={<ConcertView />} className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Details </NavLink>
    </div>
    
  )
}

export default ConcertCard;