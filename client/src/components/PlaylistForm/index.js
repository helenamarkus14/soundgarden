import React, {useState, useEffect} from 'react'
import * as concertService from "../../api/concert.service"
import { useNavigate, useParams } from 'react-router-dom';


const PlaylistForm = () => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDesc, setPlaylistDesc] = useState();
    const navigate = useNavigate();
    let {id} = useParams();
    const name = localStorage.getItem("id");

    const handleSubmit = async () => {

        const data = {playlistName, playlistDesc};
        
        if (playlistName == ""){
			alert("Please enter a playlist title");
		} else if(playlistDesc == ""){
			alert("Please input a playlist description");
		} else {
		concertService.newPlaylist(data);
        navigate(`/concerts/${name}/${id}`)
		}

    }

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    
        <form className= "p-8 mt-6 mb-0 bg-black space-y-4 border border-solid border-turquoise rounded-lg shadow-2xl"autoComplete="off">
        <h2 className="float-left max-w-lg mx-auto text-turquoise">Enter Playlist Details</h2>
            <div>
                <input
                    onChange={(e) => setPlaylistName(e.target.value)}
                    value={playlistName}
                    type="text"
                    name="title"
                    className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder="Name"
                />
            </div>
            <div className="date flex flex-row">
                <div className="flex flex-row pr-2">
                    <input
                        onChange={(e) => setPlaylistDesc(e.target.value)}
                        value={playlistDesc}
                        type="text"
                        name="month"
                        className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                        placeholder="Description"
                    />
                </div>
            </div>
           
            <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg"onClick={handleSubmit}> Create Playlist</button>

        </form>
    </div>
  )
}

export default PlaylistForm;