import GameModel from "../model/GameModel";
import Lizard from '../images/lizard.png';
import Rock from '../images/rock.png';
import Paper from '../images/paper.png';
import Scissors from '../images/scissors.png';
import Spock from '../images/spock.png';


export default function Results() {
    const option = [  {tipo:"Piedra", image:Rock},
        {tipo:"Papel", image:Paper},
        {tipo:"Tijeras", image:Scissors},
        {tipo:"Lagarto", image:Lizard},
        {tipo:"Spock", image:Spock}]

    const election1 = option.find(wherever => wherever.tipo == GameModel.getElectionPlayer())
    const computer = option.find(wherever => wherever.tipo == GameModel.getElectionComputer())

    return (
        <>

            <div className="text-center">

                <img  width="100" alt={election1.tipo}
                      src={election1.image} />

                <img width="100" alt={computer.tipo}
                     src={computer.image}/>
            </div>
        </>
    );
}