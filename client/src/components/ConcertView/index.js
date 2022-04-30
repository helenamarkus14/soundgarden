import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import * as concertService from "../../api/concert.service"
import ConcertEdit from '../ConcertEdit';

const ConcertView = () =>  {
    
    const [artist, setArtist] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    let {id} = useParams();
    const name = localStorage.getItem("id");
    const navigate = useNavigate();


    const getConcertInfo = async () => {
        await concertService.showConcert(name, id).then((res) => {
            console.log(res.data)
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
        <h3>Artist: {artist}</h3>
        <h3>Date: {month}, {day}, {year}</h3>
        <h3>Venue: {venue}</h3>
        <NavLink to={`/concerts/${name}/${id}/edit`} 
        element={<ConcertEdit />}> Edit </NavLink>
    
    </div>
  )
}

export default ConcertView;