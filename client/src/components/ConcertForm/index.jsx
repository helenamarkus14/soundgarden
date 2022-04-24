import React, {useState} from 'react'
import * as concertService from "../../api/concert.service"


const ConcertForm = () => {
    const [artistName, setArtistName] = useState("");
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();

    const handleSubmit = async () => {

        const formData = new FormData();
        formData.append("artist", artistName);
        formData.append("month", month)
        formData.append("day", day);
        formData.append("year", year);
        formData.append("venue", venue);

        if (artistName === ""){
			alert("Please input title")
		} else if(month === "" || day === "" || year === ""){
			alert("Please input date credentials")
		} else if(venue === "" ){
			alert("Please input venue")
		} else {
		let res = await concertService.createConcert(formData).then(() => {
			setArtistName("");
			setMonth("");
			setDay("");
			setYear("");
            setVenue("");
		});}

    }
    

  return (
    <div>
    <h2>Enter Concert Details</h2>
        <form encType="multipart/form-data" autoComplete="off">
            <div>
                <input
                    onChange={(e) => setArtistName(e.target.value)}
                    value={artistName}
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
            </div>

            <button onClick={handleSubmit}> Create Set List </button>
        </form>
    </div>
  )
}

export default ConcertForm;