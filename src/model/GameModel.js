import State from './PlayerModel.json';

const GameModel = {

    reset() {
        State.election1 = "";
        State.computerElection = "";
    },
    resetAll(){
        this.reset()
      State.scoreComputer = 0;
      State.score1= 0;
    },

    saveChoice( election) {
         State.election1 = election;
     },

    getPlayer() {
        return State.player1;
    },

    getElectionPlayer(){
        return State.election1;
    },

    getScorePlayer(){
        return State.score1;
    },

    getScoreComputer(){
        return State.scoreComputer;
    },

    getElectionComputer(){
        return State.computerElection;
    },

    computerPlay() {
        let election = randomInt(1, 5);
        switch (election) {
            case 1: {
                State.computerElection = "Piedra";
            }
                break;
            case 2: {
                State.computerElection = "Papel";
            }
                break;
            case 3: {
                State.computerElection = "Tijeras";
            }
                break;
            case 4: {
                State.computerElection = "Lagarto";
            }
                break;
            case 5: {
                State.computerElection = "Spock";
            }
        }
    },

    calculateResult(){
        if (State.election1 === State.computerElection) {
            return "EMPATE";
        } else if(this.player1Won()){
            State.score1 = State.score1 + 1
            return "GANASTE!";
        } else {
            State.scoreComputer = State.scoreComputer + 1 ;
            return "PERDISTE!!";
        }
    },

    player1Won() {
        let e1 = State.election1
        let e2 = State.computerElection
        return (
            (e1 === "Tijeras" && (e2==="Papel"   || e2==="Lagarto")) ||
            (e1 === "Papel"   && (e2==="Piedra"  || e2==="Spock"))   ||
            (e1 === "Piedra"  && (e2==="Lagarto" || e2==="Tijeras"))  ||
            (e1 === "Lagarto" && (e2==="Spock"   || e2==="Papel"))   ||
            (e1 === "Spock"   && (e2==="Tijeras" || e2==="Piedra")))
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default GameModel;