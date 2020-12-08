import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div >
        <h1>Piedra Papel Tijera Lagarto Spock</h1>
        <Link  to ="/game">
            <button type="button" className="btn btn-outline-success">Jugar</button>
        </Link>
        <Link  to ="/instruction">
            <button type="button" className="btn btn-outline-success">Como jugar</button>
        </Link>
        </div>
    </>
  );
}

export default Home;