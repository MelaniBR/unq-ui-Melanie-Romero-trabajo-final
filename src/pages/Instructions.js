import React from 'react';
import Header from "../components/Header";

export default function Instruction() {
    return (<div>
            <Header/>
            <div className= "text-center">
            <h1>Instruction</h1>
            <p className="bg-secondary text-white blockquote lead ">

                Piedra, Papel, Tijera, Lagarto o Spock es una expansión de los clásicos método de selección de juego
                piedra-papel-tijeras. Funciona en el mismo principio básico, pero incluye dos armas adicionales: el
                lagarto y Spock
            </p>
            </div>
            <div>
                <h1 className= "text-center" >Reglas</h1>
                <ul className="list-group-item">
                    <li className="list-group-item list-group-item-info">Tijeras cortan papel</li>
                    <li className="list-group-item list-group-item-light">Papel cubre piedra</li>
                    <li className="list-group-item list-group-item-info">Piedra aplasta lagarto</li>
                    <li className="list-group-item list-group-item-light">Lagarto envenena Spock</li>
                    <li className="list-group-item list-group-item-info">Spock destruye tijeras</li>
                    <li className="list-group-item list-group-item-light">Tijeras decapitan lagarto</li>
                    <li className="list-group-item list-group-item-info">Lagarto come papel</li>
                    <li className="list-group-item list-group-item-light">Papel desaprueba Spock</li>
                    <li className="list-group-item list-group-item-info">Spock vaporiza piedra</li>
                    <li className="list-group-item list-group-item-light">Piedra aplasta tijeras</li>
                </ul>
            </div>
        </div>
    )
        ;
}