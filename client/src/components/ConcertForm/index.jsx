import React, {useState, useEffect} from 'react'
import * as concertService from "../../api/concert.service"


const ConcertForm = () => {
    const [artist, setArtist] = useState("");
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    const [user, setUser] = useState("");

    const getInfo = () => {
        setUser(localStorage.getItem("id"));
    }


    const handleSubmit = async () => {

        const data = {artist, month, day, year, venue, user};
    
        if (artist == ""){
			alert("Please input title")
		} else if(month == "" || day == "" || year == ""){
			alert("Please input date credentials")
		} else if(venue == "" ){
			alert("Please input venue")
		} else {
		concertService.createConcert(data).then(() => {
			setArtist("");
			setMonth("");
			setDay("");
			setYear("");
            setVenue("");
		});}

    }

    useEffect(() => {
        getInfo();
    }, [])
    

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    
        <form className= "p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"autoComplete="off">
        <h2 className="max-w-lg mx-auto">Enter Concert Details</h2>
            <div>
                <input
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                    name="title"
                    className="w-1/2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Artist Name"
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setMonth(e.target.value)}
                    value={month}
                    type="text"
                    name="month"
                    className="w-1/2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Month"
                />
            </div>
            <div className="flex flex-row">
                <input
                    onChange={(e) => setDay(e.target.value)}
                    value={day}
                    type="text"
                    name="day"
                    className="w-1/2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Day"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    type="text"
                    name="year"
                    className="w-1/2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Year"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    type="text"
                    name="venue"
                    className="w-1/2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Concert Venue"
                />
                <h4>Owner: {user}</h4>
            </div>


            <button className="block w-1/3 px-5 py-3 text-sm font-medium text-white bg-yellow rounded-lg"onClick={handleSubmit}> Create Set List </button>

        </form>
    </div>
  )
}

export default ConcertForm;