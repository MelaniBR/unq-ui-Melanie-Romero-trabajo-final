import React from 'react';
import {Link} from 'react-router-dom';
//Todo: hacer el fondo del incio

function Home() {
    return (
        <>
            <div className="text-center background">
                <div class="container">
                    <div>
                        <p className="title-style pt-5 pb-5">
                            Piedra Papel Tijera Lagarto Spock
                        </p>
                    </div>
                    <div>
                        <Link to="/game">
                            <button type="button" className="m-3 btn btn-outline-success">Jugar</button>
                        </Link>
                        <Link to="/instruction">
                            <button type="button" className="btn btn-outline-success">Como jugar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;