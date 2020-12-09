import GameModel from "../model/GameModel";

export default function Scores() {
    return (
        <div className="score-board">
            <div id="user-level" className="badge">User</div>
            <div id="computer-level" className="badge">Comp</div>
            <span> {GameModel.getScorePlayer()}</span> : <span > {GameModel.getScoreComputer()}</span>
        </div>
    )
}