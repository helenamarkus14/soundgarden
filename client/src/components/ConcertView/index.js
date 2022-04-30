import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import * as concertService from "../../api/concert.service"
import ConcertEdit from '../ConcertEdit';
import PlaylistForm from '../PlaylistForm';
import PlaylistEdit from '../PlaylistEdit';

const ConcertView = () =>  {
    
    const [artist, setArtist] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [venue, setVenue] = useState();
    const [playlists, setPlaylists] = useState([]);
    let {id} = useParams();
    const name = localStorage.getItem("id");
    const navigate = useNavigate();


    const getConcertInfo = () => {
         concertService.showConcert(name, id).then((res) => {
            setArtist(res.data.data.artist);
            setMonth(res.data.data.month);
            setDay(res.data.data.day);
            setYear(res.data.data.year);
            setVenue(res.data.data.venue);
            setPlaylists(res.data.data.playlists)
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

        <NavLink to={`/concerts/${name}/${id}/playlists`} 
        element={<PlaylistForm />}> Create A Playlist </NavLink>
        <h3>Playlists</h3>
        {playlists.map((playlist) => {
            return (
                <>
                
                <h3>{playlist.name},</h3>
                <h4>{playlist.description}</h4>
                <NavLink to={`/concerts/${name}/${id}/playlists/${playlist._id}`} 
                element={<PlaylistEdit />}> Edit Playlist </NavLink>
                </>
            )
        })}
    </div>
  )
}

export default ConcertView;