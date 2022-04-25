import React from 'react';
import { NavLink } from 'react-router-dom';
import ConcertView from '../ConcertView';

const ConcertCard = (props) => {
  return (
    <div>
        <h3>Artist: {props.artist}</h3>
        <h3>Date: {props.month}, {props.day}, {props.year}</h3>
        <h3>Venue: {props.venue}</h3>
        <NavLink to={`/concerts/${props.id}`} 
        element={<ConcertView />}> Update </NavLink>
    </div>
    
  )
}

export default ConcertCard;