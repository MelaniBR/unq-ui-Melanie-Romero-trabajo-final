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
    const keepPlaying = () => {
        setComputerTurn(false)
        setEndgame(false)
        setResults({})
        GameModel.reset()
    }
    function resetGame() {
        setComputerTurn(false)
        setEndgame(false)
        setResults({})
        GameModel.resetAll()
    }


    return (
        <>
            <Header/>
            <div className="background">
                {!endgame ? (
                    <div className="text-center">

                        <div>
                            {computerTurn ? (
                                <div className="flex justify-center spinner-grow text-light" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </div>
                            ) : (

                                <div className=" flex justify-center">

                                    <Scores/>
                                    <h1 className="text-style pt-5 pb-5"> Haz tu Movimiento</h1>
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
                        <div className="pt-5 pb-5">
                            <div>
                                <button className="btn btn-light  " onClick={() => keepPlaying()}>
                                    Seguir Jugando
                                </button>
                            </div>
                            <div className="pt-4">
                                <button className="btn btn-danger m-lg-1 " onClick={() => resetGame()}>
                                    Nuevo Juego
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
} 