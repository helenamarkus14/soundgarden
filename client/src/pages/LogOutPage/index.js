import React from 'react'
import { NavLink } from 'react-router-dom';

const LogOutPage = () => {
  return (
    <div>
        <div className="bg-crowd bg-cover bg-center h-screen"> 
            <div className="homepage text-center flex flex-col">
                <div className="pb-5 flex flex-col items-center text-center bg-black bg-transparent">
                    <h1 className="mt-20 mb-5 text-red text-5xl text-center font-bold">Thank you for using Sound Garden</h1>
                    <h2 className="mt-15 mb-5 text-white text-3xl text-center font-bold">You have successfully logged out</h2>
                    <NavLink to="/signin"><button className="text-yellow bg-black font-bold mx-auto transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-3 mt-3" type="button">Sign In Again</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogOutPage;