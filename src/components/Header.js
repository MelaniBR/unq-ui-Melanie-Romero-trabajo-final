import React from 'react';
import {Link} from "react-router-dom";

import GameModel from "../model/GameModel";


export default function Header() {
    function resetAll() {
        GameModel.resetAll()
    }

    return (
        <div className= "background-naver">
            <div>
                <Link to="/">
                    <button className=" btn btn-link text-right " onClick={resetAll}>
                        Volver
                    </button>
                </Link>
            </div>
            <div className="bg-1 p-6">
                <h1 className="text-center font-italic pb-5">
                    Piedra Papel Tijera Lagarto Spock
                </h1>
            </div>
        </div>
    ) ;
}