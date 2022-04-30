import React from 'react';
import { NavLink } from 'react-router-dom';
import ConcertEdit from '../ConcertEdit';
import ConcertView from '../ConcertView';

const ConcertCard = (props) => {

  const name = localStorage.getItem("id");
  return (
    <div>
        <h3>Artist: {props.artist}</h3>
        <h3>Date: {props.month}, {props.day}, {props.year}</h3>
        <h3>Venue: {props.venue}</h3>
        <NavLink to={`/concerts/${name}/${props.id}`} 
        element={<ConcertView />}> Details </NavLink>
    </div>
    
  )
}

export default ConcertCard;