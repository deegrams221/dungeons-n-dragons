import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className = 'home'>
      <h1>Dungeons & Dragons Database</h1>
      <h3>Character Creation</h3>
      <Link to = '/character-creation'>Enter</Link>
    </div>
  );
}