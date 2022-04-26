import React, {useState, useEffect} from 'react'
import ConcertForm from '../../components/ConcertForm';
import ConcertCard from '../../components/ConcertCard';
import * as concertService from "../../api/concert.service"
import { NavLink } from 'react-router-dom';

const ConcertPage = () => {
const [concerts, setConcerts] = useState([]);

const fetchConcerts = async () => {
    await concertService.indexConcert().then((res) => {
        setConcerts(res.data.data.reverse());
    })
}
useEffect(() => {
    fetchConcerts();
    
	}, []);
  return (
    <div>
        <NavLink to="/concerts/new"><button className="rounded-full border-r-purple" type="button">Create New Concert</button></NavLink>
        <ConcertForm />
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
                />
                </>
            )
        })}
    </div>
  )
}

export default ConcertPage;