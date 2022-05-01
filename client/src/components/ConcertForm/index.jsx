import React, {useState, useEffect} from 'react'
import * as concertService from "../../api/concert.service"
import { useNavigate } from 'react-router-dom';


const ConcertForm = () => {
    const [artist, setArtist] = useState("");
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const getInfo = () => {
        setUser(localStorage.getItem("id"));
    }


    const handleSubmit = async () => {

        const data = {artist, month, day, year, venue, user};
        
        if (artist == ""){
			alert("Please input title");
		} else if(month == "" || day == "" || year == ""){
			alert("Please input date credentials");
		} else if(month > 12 || month <= 0 || day > 31 || day <= 0) {
            alert("Please check date values");
        } else if(venue == "" ){
			alert("Please input venue");
		} else {
		concertService.createConcert(data);
        setArtist("");
        setMonth("");
        setDay("");
        setYear("");
        setVenue("");
        navigate(`/concerts/${user}`)
		}

    }

    useEffect(() => {
        getInfo();
    }, [])
    

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    
        <form className= "p-8 mt-6 mb-0 bg-black space-y-4 border border-solid border-turquoise rounded-lg shadow-2xl"autoComplete="off">
        <h2 className="float-left max-w-lg mx-auto text-turquoise text-2xl">Enter Concert Details</h2>
            <div>
                <input
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                    name="title"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder="Artist Name"
                />
            </div>
            <div className="date flex flex-row">
                <div className="flex flex-row pr-2">
                    <input
                        onChange={(e) => setMonth(e.target.value)}
                        value={month}
                        type="text"
                        name="month"
                        className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                        placeholder="Month"
                    />
                </div>
                <div className="flex flex-row pr-2">
                    <input
                        onChange={(e) => setDay(e.target.value)}
                        value={day}
                        type="text"
                        name="day"
                        className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                        placeholder="Day"
                    />
                </div>
                <div>
                    <input
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                        type="text"
                        name="year"
                        className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                        placeholder="Year"
                    />
                </div>
            </div>
            <div>
                <input
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    type="text"
                    name="venue"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder="Concert Venue"
                />
                {/* <h4 className="py-2.5 text-sm text-gray-300 bg-transparent">Owner: {user}</h4> */}
            </div>


            <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg"onClick={handleSubmit}> Create Concert</button>

        </form>
    </div>
  )
}

export default ConcertForm;