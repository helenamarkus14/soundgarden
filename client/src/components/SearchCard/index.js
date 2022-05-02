import React from 'react';


const SearchCard = (props) => {

 
  return (
      <div className="w-96 h-auto mx-auto my-auto bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
          <h3 className="mb-2 px-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h3>
          {props.image === undefined ? <h3>No image found</h3> : <img className="rounded-lg h-2/3" src={props.image} alt=""/>}
      </div>
  )
}

export default SearchCard;