import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (

            <div className="bg-crowd bg-cover bg-center h-full"> 
                <div className="p-5 w-6/12 mx-auto text-center bg-black bg-opacity- rounded-xl shadow-md flex flex-col border-2 border-turquoise">
                    <h1 className="text-red text-3xl font-bold">Welcome to Sound Garden</h1>
                    
                    <NavLink to="/signin"><button className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Started</button></NavLink>
                    
                    
                    <div className="container flex flex-row">
                                <div class="transition ease-in-out delay-150 bg-red bg-opacity-50 hover:-translate-y-1 hover:scale-110 hover:bg-red hover:bg-opacity-80 duration-300 hover concerts p-5 w-screen mx-auto bg-black rounded-xl shadow-md flex flex-col items-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise">
                            
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="ml-4">
                                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                                    Quaerat, saepe?
                                </p>
                                </div>
                            </div>

                            <div class="playlists p-5 w-screen  mx-auto bg-black bg-opacity-70 rounded-xl shadow-md flex flex-col items-center overflow-y-auto  touch-auto space x-4 border-2 border-turquoise">
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="ml-4">
                                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                                    Quaerat, saepe?
                                </p>
                                </div>
                            </div>
                            <div class="users p-5 w-screen mx-auto bg-black bg-opacity-70 rounded-xl shadow-md flex flex-col items-center overflow-auto touch-auto space x-4 border-2 border-turquoise">
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="ml-4">
                                <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                                    Quaerat, saepe?
                                </p>
                                </div>
                            </div>
                </div>  
                </div>
                </div>


    )
}

export default Home;