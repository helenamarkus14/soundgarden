import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as concertService from "../../api/concert.service"

const ConcertEdit = () =>  {
    
    const [artist, setArtist] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    let {id} = useParams();
    const name = localStorage.getItem("id");
    const navigate = useNavigate();

    const handleSubmit =  () => {
		let data = {artist, month, day, year, venue}
		concertService.updateConcert(name, id, data);
        navigate(`/concerts/${name}`);
	};

    const deleteConcert = () => {
         concertService.destroyConcert(name, id);
        navigate(`/concerts/${name}`);
        
    }

    const getConcertInfo = async () => {
        await concertService.showConcert(name, id).then((res) => {
            setArtist(res.data.data.artist);
            setMonth(res.data.data.month);
            setDay(res.data.data.day);
            setYear(res.data.data.year);
            setVenue(res.data.data.venue);
        })
    }

    useEffect(() => {
        getConcertInfo();
    }, [])
   
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    
    <form className= "p-8 mt-6 mb-0 bg-black space-y-4 border border-solid border-turquoise rounded-lg shadow-2xl" autoComplete="off">
            <div>
            <h2 className="float-left max-w-lg mx-auto text-turquoise">Update Artist</h2>
                <input
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                    name="title"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setMonth(e.target.value)}
                    value={month}
                    type="text"
                    name="month"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setDay(e.target.value)}
                    value={day}
                    type="text"
                    name="day"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    type="text"
                    name="year"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    type="text"
                    name="venue"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                
                />

            </div>

            <button className="text-yellow bg-black font-bold transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1"onClick={handleSubmit}> Update Concert </button>
            <button className="text-turquoise bg-black font-bold transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"onClick={deleteConcert}> Delete Concert </button>
        </form>
    </div>
  )
}

export default ConcertEdit;