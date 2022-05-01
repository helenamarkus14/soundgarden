import React, {useState, useEffect} from 'react'
import ConcertCard from '../../components/ConcertCard';
import * as concertService from "../../api/concert.service"
import { NavLink, useParams } from 'react-router-dom';

const ConcertPage = () => {
const [concerts, setConcerts] = useState([]);
const {name} = useParams();

const fetchConcerts = () => {
     concertService.userConcert(name).then((res) => {
        setConcerts(res.data.data.reverse());
    })
}
useEffect(() => {
    fetchConcerts();
	}, []);

  return (
    <div className="overflow-auto">
        <NavLink to="/concerts/new"><button className="h-10 text-black bg-yellow font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none ml-10 mt-3 mr-1 mb-1 ease-linear transition-all duration-150" type="button">+ Create New Concert</button></NavLink>
        <div className="grid lg:grid-cols-3">
        {concerts.map((concert, i) => {
            return (
                <>
                <ConcertCard 
                    key={i}
                    artist={concert.artist}
                    month={concert.month}
                    day={concert.day}
                    year={concert.year}
                    venue={concert.venue}
                    id={concert._id}
                />
                </>
            )
        })}
       </div> 
    </div>
  )
}

export default ConcertPage;