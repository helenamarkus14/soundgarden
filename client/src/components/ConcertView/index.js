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

    const openSpotifyPlaylistLink = (url) => {
        window.open(url, "_blank");
    }


    useEffect(() => {
        getConcertInfo();
    }, [])
   
  return (
    <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
        <h3 className="mt-2 mb-2 px-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Artist: {artist}</h3>
        <h3 className="mb-3 px-7 font-normal text-gray-700 dark:text-gray-400">Date: {month}, {day}, {year}</h3>
        <h3 className="mb-3 px-7 font-normal text-gray-700 dark:text-gray-400">Venue: {venue}</h3>
        <NavLink to={`/concerts/${name}/${id}/edit`} 
        element={<ConcertEdit />} className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xl outline-none focus:outline-none ml-5 mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Edit </NavLink>

        <NavLink to={`/concerts/${name}/${id}/playlists`} 
        element={<PlaylistForm />} className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xl outline-none focus:outline-none ml-5 mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Create A Playlist </NavLink>
        <h3 className="text-white w-96 mt-6 ml-8 pb-2 text-3xl">Playlists</h3>
        {playlists.map((playlist) => {
            return (
                <>
                
                <h3 className="w-2/3 mt-6 ml-8 bg-black pb-2 dark:bg-black text-2xl text-white">{playlist.name}</h3>
                <button className="text-yellow bg-black font-bold rounded-full ml-5 px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => openSpotifyPlaylistLink(playlist.spotify_url)}>Open Spotify Playlist</button>
                <NavLink to={`/concerts/${name}/${id}/playlists/${playlist._id}/edit`} 
                element={<PlaylistEdit />} className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Edit Playlist </NavLink>
                </>
            )
        })}
    </div>
  )
}

export default ConcertView;