import React from 'react';
import {Link} from 'react-router-dom';

function RaceList (props) {
  return (
    <div className='list-wrapper'>
      {props.races.map(charRace => (
        <div className='card' key={charRace.id}>
          <img src={charRace.img} alt={charRace.name} />
          <h2><Link to={`/races/${charRace.id}`}>{charRace.name}</Link></h2>
        </div>
      ))}
    </div>
  );
}

export default RaceList;