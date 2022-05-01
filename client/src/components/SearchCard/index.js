import React from 'react';


const SearchCard = (props) => {
  return (
    <div className="grid lg:grid-cols-3">
    <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
        <h3 className="mb-2 px-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h3>
        <img src={props.image} alt=""/>
    </div>
    </div>
  )
}

export default SearchCard;