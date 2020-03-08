import React from 'react';
import { Link } from 'react-router-dom';

const ClassList = props => {
    return (
        <div className = 'class-list-wrapper'>
            {props.characterClasses.map(characterClass => (
                <div className = 'class-card' key = {characterClass.id}>
                    <img src = {characterClass.img} alt = {characterClass.name} />
                    <h2>
                        <Link to = {`/classses/${characterClass.id}`}>{characterClass.name}</Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default ClassList;