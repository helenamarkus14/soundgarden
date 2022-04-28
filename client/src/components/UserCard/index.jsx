import React from 'react';

const UserCard = (props) => {

  return (
    <div>
        <h3>User: {props.displayname}</h3>
        <h3>Spotify ID: {props.id}</h3>
        <a href={props.spotifyurl}>Check My Spotify!</a>
        <img src={props.imageurl} alt="missing" />

    </div>
    
  )
}

export default UserCard;