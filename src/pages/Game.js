import React, {useState} from 'react';
import Lizard from '../images/lizard.png';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import Spock from '../images/spock.png';
import GameModel from "../model/GameModel";
import Header from '../components/Header';

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
        <div>
                {!endgame ? (
                    <div className= "text-center">
                        {!computerTurn ?
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
                        <h1> {results}</h1>

                        <button className="btn btn-outline-warning" onClick={() => resetState()}>
                            Jugar otra Ronda
                        </button>

                    </div>
                )}
            </div>
    </>
    );
} 