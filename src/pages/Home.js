import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <>
        <Header/>
        <div className="text-center">

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