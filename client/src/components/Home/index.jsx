import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (

            <div className="bg-crowd bg-cover bg-center h-full"> 
                <div className="homepage text-center flex flex-col">
                <div className="pb-5 flex flex-col items-center text-center bg-black bg-transparent">
                    <h1 className="mt-20 mb-5 text-red text-5xl text-center font-bold">Welcome to Sound Garden</h1>
                    
                    <NavLink to="/signin"><button className="text-yellow bg-black font-bold mx-auto transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-3 mt-3" type="button">Get Started</button></NavLink>
                    </div>
                    
                    <div className="grid lg:grid-cols-3">
                                <div class="concert w-96 bg-black bg-opacity-70 concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col justify-center items-center overflow-y-auto touch-auto  border-2 border-turquoise">
                            
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="concerts">
                                <h2 class="text-lg text-gray-300 font-bold">Grow your concert memories</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Enables users to plan, keep track, and maintain playlists in preparation for their most awaited concerts
                                </p>
                                </div>
                            </div>

                            <div class="concert w-96 bg-black bg-opacity-70 concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col justify-center items-center overflow-y-auto touch-auto  border-2 border-turquoise">
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="playlists">
                                <h2 class="text-lg text-gray-300 font-bold">The soundtrack to your life</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Links your Spotify playlists and pulls in track list for ease of access.
                                </p>
                                </div>
                            </div>
                            <div class="concert w-96 bg-black bg-opacity-70 concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col justify-center items-center overflow-y-auto touch-auto  border-2 border-turquoise">
                                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                </span>
                        
                                <div class="users">
                                <h2 class="text-lg text-gray-300 text-center font-bold">Fresh finds</h2>
                        
                                <p class="mt-1 text-sm text-gray-300">
                                    Explore other user's playlists to grow your music pallette.
                                </p>
                                </div>
                            </div>
                </div>  
                </div>
                </div>


    )
}

export default Home;