import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as concertService from "../../api/concert.service"

const ConcertView = () =>  {
    
    const [artist, setArtist] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    let {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = async () => {
		let data = {artist, month, day, year, venue}
		
		await concertService.updateConcert(id, data).then(() => {
            navigate("/concerts");
		});
	};

    const deleteConcert = async () => {
         await concertService.destroyConcert(id).then(()=> {
            navigate("/concerts");
        })
    }

    const getConcertInfo = async () => {
        await concertService.showConcert(id).then((res) => {
            setArtist(res.data.data.artist);
            setMonth(res.data.data.month);
            setDay(res.data.data.day);
            setYear(res.data.data.year);
            setVenue(res.data.data.venue);
        })
    }

    useEffect(() => {
        getConcertInfo(id);
    }, [])
   
  return (
    <div>
        <h2>Update Concert Details</h2>
        <form autoComplete="off">
            <div>
                <h3>Update Artist Name</h3>
                <input
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                    name="title"
                    
                />
            </div>
            <div>
                <h3>Update Month</h3>
                <input
                    onChange={(e) => setMonth(e.target.value)}
                    value={month}
                    type="text"
                    name="month"
                    
                />
            </div>
            <div>
                <h3>Update Day</h3>
                <input
                    onChange={(e) => setDay(e.target.value)}
                    value={day}
                    type="text"
                    name="day"
                    
                />
            </div>
            <div>
                <h3>Update Year</h3>
                <input
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    type="text"
                    name="year"
                    
                />
            </div>
            <div>
                <h3>Update Venue</h3>
                <input
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    type="text"
                    name="venue"
                
                />

            </div>

            <button onClick={handleSubmit}> Update Concert </button>
            <button onClick={deleteConcert}> Delete Concert </button>
        </form>
    </div>
  )
}

export default ConcertView