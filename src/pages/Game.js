import React, {useState} from 'react';
import Lizard from '../images/lizard.png';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import Spock from '../images/spock.png';
import PlayersModel from "../model/GameModel";
import Header from '../components/Header';

export default function Game() {
    const [playerTurn, setPlayerTurn] = useState(true);
    const [computerTurn, setComputerTurn] = useState(false);
    const [endgame, setEndgame] = useState(false);
    const [resultsJson, setResultsJson] = useState({});


    const togglePlay = (choice) => {

        PlayersModel.saveChoice(choice);
        setComputerTurn(true)
        simulateComputerPlay();
    }

    const simulateComputerPlay = () => {
        PlayersModel.computerPlay();
        setTimeout(() => {
            let result = PlayersModel.calculateResult();
            setResultsJson(result);
            setEndgame(true);

        }, 1500);
    }
    const resetState = () => {
       //TODO:SE REINICIA EL JUEGO
    }

    return (
        <>
        <Header/>
        <div>
                {!endgame ? (
                    <div className= "text-center">
                        {playerTurn ?
                            <div >Turno del Jugador</div>
                            : <div></div>
                        }
                        <div >
                            {computerTurn ? (
                                <div className="flex justify-center">
                                    <span><p>Cargando ...</p></span>
                                </div>
                            ) : (
                                <div  >
                                    <img  width="100" alt="Piedra"
                                         src={Rock} onClick={() => togglePlay("Piedra")}/>
                                    <img width="100" alt="Papel"
                                         src={Paper} onClick={() => togglePlay("Papel")}/>
                                    <img width="100" alt="Tijeras"
                                         src={Scissors} onClick={() => togglePlay("Tijeras")}/>
                                    <img width="100" alt="Lagarto"
                                         src={Lizard} onClick={() => togglePlay("Lagarto")}/>
                                    <img width="100" alt="Spock"
                                         src={Spock} onClick={() => togglePlay("Spock")}/>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className= "text-center" >
                        <h1> {resultsJson}</h1>

                        <button onClick={() => resetState()}>
                            Jugar otra Ronda
                        </button>

                    </div>
                )}
            </div>
    </>
    );
} 