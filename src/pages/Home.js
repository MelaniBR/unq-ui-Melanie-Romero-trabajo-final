import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <>
            <body className="text-center background-home">
                <div class="container">
                    <div>
                        <p className="title-style pt-5 pb-5">
                            Piedra Papel Tijera Lagarto Spock
                        </p>
                    </div>
                    <div>
                        <Link to="/game">
                            <button type="button" className="m-3 btn btn-outline-light">Jugar</button>
                        </Link>
                        <Link to="/instruction">
                            <button type="button" className="btn btn-outline-light">Como jugar</button>
                        </Link>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Home;