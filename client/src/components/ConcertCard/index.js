import React from 'react'

const ConcertCard = (props) => {
  return (
    <div>
        <h3>Artist: {props.artist}</h3>
        <h3>Date: {props.month}, {props.day}, {props.year}</h3>
        <h3>Venue: {props.venue}</h3>
    </div>
  )
}

export default ConcertCard;