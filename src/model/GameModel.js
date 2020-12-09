import State from './PlayerModel.json';

const GameModel = {

    reset() {
        State.election1 = "";
        State.computerElection = "";
    },


    saveChoice( election) {
         State.election1 = election;
     },

    getPlayer() {
        return State.player1;
    },

    computerPlay() {
        let election = 1 ;//randomInt(1, 5);
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
            return "Empate";
        } else if(this.player1Won()){
            return "Ganaste";
        } else {
            return "Perdiste!!";
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