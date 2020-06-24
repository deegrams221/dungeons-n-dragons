import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className = 'home'>
      <h1>Dungeons & Dragons Database</h1>
      <h3>Character Creation</h3>
      <Link to = '/classes'>Enter</Link>
    </div>
  );
}

export default Home;