import React from 'react';

const UserCard = (props) => {

  return (

    <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
        <img class="h-96 rounded-t-lg mx-auto py-7" src={props.imageurl} alt="missing"/>
            <h5 className="mb-2 px-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User: {props.displayname}</h5>
            <p className="mb-3 px-7 font-normal text-gray-700 dark:text-gray-400">Spotify ID: {props.id}</p>
            <a href={props.spotifyurl} class="inline-flex ml-7 items-center py-2 px-3 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-yellow dark:hover:bg-red dark:focus:ring-blue-800">
              Visit Spotify Profile
            </a>
    </div>

 
 


  )
}

export default UserCard;
