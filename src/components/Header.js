import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <div className= "background">
            <div>
                <Link to="/">
                    <button className=" btn btn-link text-right ">
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
    )
        ;
}