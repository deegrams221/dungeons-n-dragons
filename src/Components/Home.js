import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h1>Dungeons & Dragons Database</h1>
      <h2><Link to='/classes'>Character Creation</Link></h2>
    </div>
  );
}

export default Home;