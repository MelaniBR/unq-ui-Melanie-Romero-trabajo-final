import React, {useState} from 'react';
import Lizard from '../images/lizard.png';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import Spock from '../images/spock.png';
import GameModel from "../model/GameModel";
import Header from '../components/Header';
import Results from "../components/Results";
import Scores from "../components/Scores";
import {Link} from 'react-router-dom';

export default function Game() {

    const [computerTurn, setComputerTurn] = useState(false);
    const [endgame, setEndgame] = useState(false);
    const [results, setResults] = useState({});


    const togglePlay = (choice) => {

        GameModel.saveChoice(choice);
        setComputerTurn(true)
        simulateComputerPlay();
    }

    const simulateComputerPlay = () => {
        GameModel.computerPlay();
        setTimeout(() => {
            let result = GameModel.calculateResult();
            setResults(result);
            setEndgame(true);

        }, 1500);
    }
    const resetState = () => {
        setComputerTurn(false)
        setEndgame(false)
        setResults({})
        GameModel.reset()
    }


    return (
        <>
            <Header/>
            <div className="background">
                {!endgame ? (
                    <div className="text-center">
                        {!computerTurn ?
                            <div>Turno del Jugador</div>
                            : <div></div>
                        }
                        <div className="choices">
                            {computerTurn ? (
                                <div className="flex justify-center">
                                    <span><p>Cargando ...</p></span>
                                </div>
                            ) : (

                                <div>
                                    <Scores/>
                                    <img class="choice" alt="Piedra"
                                         src={Rock} onClick={() => togglePlay("Piedra")}/>
                                    <img class="choice" alt="Papel"
                                         src={Paper} onClick={() => togglePlay("Papel")}/>
                                    <img class="choice" alt="Tijeras"
                                         src={Scissors} onClick={() => togglePlay("Tijeras")}/>
                                    <img class="choice" alt="Lagarto"
                                         src={Lizard} onClick={() => togglePlay("Lagarto")}/>
                                    <img class="choice" alt="Spock"
                                         src={Spock} onClick={() => togglePlay("Spock")}/>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="pb-2 pt-3">
                            <h1> {results}</h1>
                        </div>
                        <Results/>
                        <div className="pt-4">
                            <button className="btn btn-info " onClick={() => resetState()}>
                                Seguir Jugando
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
} 