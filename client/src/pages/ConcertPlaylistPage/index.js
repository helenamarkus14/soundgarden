import React, {useState, useEffect} from 'react'
import ConcertCard from '../../components/ConcertCard';
import * as concertService from "../../api/concert.service"
import { NavLink, useParams } from 'react-router-dom';

const ConcertPlaylistPage = () => {
const [concertInfo, setConcertInfo] = useState([]);
const {name} = useParams();
const {id} = useParams();

const fetchConcerts = async () => {
    await concertService.showConcert(name, id).then((res) => {
        setConcertInfo(res.data.data);
    })
}
useEffect(() => {
    fetchConcerts();
    
	}, []);

console.log(concertInfo);
  return (
    <div className="overflow-auto">
        
   
               
                {/* <ConcertCard 
                    key={i}
                    artist={concert.artist}
                    month={concert.month}
                    day={concert.day}
                    year={concert.year}
                    venue={concert.venue}
                    id={concert._id}
                /> */}
               
            
      
    </div>
  )
}

export default ConcertPlaylistPage;