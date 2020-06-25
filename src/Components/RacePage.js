import React from 'react';
import {Route, Link} from 'react-router-dom';
import RaceDetails from './RaceDetails';

function RacePage(props) {
  const charRace = props.races.find(charRace => props.match.params.id === `${charRace.id}`);

  return (
    <div>
      <div className='page'>
        <a href='https://www.dndbeyond.com/races'>D&d Beyond</a>
        <h1>{charRace.name}</h1>
        <img src={charRace.img} alt={charRace.name} />
      </div>
      <div className='page-links'>
        <Link to={`/races/${props.match.params.id}/details`}>Race Description</Link>
        <Route path="/races/:id/details" render={props => <RaceDetails details={charRace.description} />} />
      </div>
    </div>
  );
}

export default RacePage;