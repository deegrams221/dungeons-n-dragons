import React from 'react';
import {Link} from 'react-router-dom';

function ClassList (props) {
  return (
    <div className='list-wrapper'>
      {props.classes.map(charClass => (
        <div className='card' key={charClass.id}>
          <img src={charClass.img} alt={charClass.name} />
          <h2><Link to={`/classes/${charClass.id}`}>{charClass.name}</Link></h2>
        </div>
      ))}
    </div>
  );
}

export default ClassList;