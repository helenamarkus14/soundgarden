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
    <div>
    <h2>Enter Concert Details</h2>
        <form autoComplete="off">
            <div>
                <input
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                    name="title"
                    placeholder="Add Artist Name"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setMonth(e.target.value)}
                    value={month}
                    type="text"
                    name="month"
                    placeholder="Month"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setDay(e.target.value)}
                    value={day}
                    type="text"
                    name="day"
                    placeholder="Day"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    type="text"
                    name="year"
                    placeholder="Year"
                />
            </div>
            <div>
                <input
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    type="text"
                    name="venue"
                    placeholder="Concert Venue"
                />
                <h4>Owner: {user}</h4>
            </div>

            <button onClick={handleSubmit}> Create Concert </button>
        </form>
    </div>
  )
}

export default ConcertForm;