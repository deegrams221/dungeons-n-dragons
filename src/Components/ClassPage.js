import React from 'react';
import {Route, Link} from 'react-router-dom';
import ClassDetails from './ClassDetails';

function ClassPage(props) {
  const charClass = props.classes.find(charClass => props.match.params.id === `${charClass.id}`);

  return (
    <div>
      <div className='page'>
        <h1>{charClass.name}</h1>
        <img src={charClass.img} alt={charClass.name} />
      </div>
      <div className='page-links'>
        <Link to={`/classes/${props.match.params.id}/details`}>Class Description</Link>
        <Route path="/classes/:id/details" render={props => <ClassDetails details={charClass.description} />} />
      </div>
    </div>
  );
}

export default ClassPage;