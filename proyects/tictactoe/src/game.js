import React from "react"
import {FaPlus, FaRegCircle,} from "react-icons/fa"


var gameState_var = [[0, 0, 0],
                     [0, 0, 0],
                     [0, 0, 0]]


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.weapon,
            currPlayer: this.props.userName1,
            playedCircle: "",
            playedCross: "",
            victory: 0,
            gameStarted: 0,
            gameState: [[0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]]
        }
    }

    gameHandler = (e) => {

        if (this.props.weapon == 1 && this.state.gameStarted == 0) {
            this.setState({
                playedCross: this.props.userName1,
                playedCircle: this.props.userName2,
                gameStarted: 1
            })

        }

        if (this.props.weapon == 2 && this.state.gameStarted == 0) {
            this.setState({
                playedCross: this.props.userName2,
                playedCircle: this.props.userName1,
                gameStarted: 1
            })
        }
        console.log(this.state.playedCircle, this.state.playedCross, this.state.currPlayer, "ayayay")
        const aux = e.target.id.split(",")
        const ASDF = [parseInt(aux[0]), parseInt(aux[1])]
        var usuario;

        if (this.state.victory == 0) {
            if (gameState_var[ASDF[0]][ASDF[1]] === 0) {

                if (this.state.user === 1) {
                    usuario = 2;
                    gameState_var[ASDF[0]][ASDF[1]] = 1;

                    this.setState({
                        currPlayer: this.state.playedCircle,
                        user: usuario,
                        gameState: gameState_var
                    })
                }

                if (this.state.user === 2) {
                    usuario = 1
                    gameState_var[ASDF[0]][ASDF[1]] = 2;

                    this.setState({
                        currPlayer: this.state.playedCross,
                        user: usuario,
                        gameState: gameState_var
                    })
                }
            }
        }
        this.winCondition();
    }

    winCondition() {
             if ((gameState_var[0][0] == 1 && gameState_var[1][0] == 1 && gameState_var[2][0] == 1) || (gameState_var[0][0] == 2 && gameState_var[1][0] == 2 && gameState_var[2][0] == 2)) { this.victoryAnimation("0,0,1,0,2,0") }
        else if ((gameState_var[0][1] == 1 && gameState_var[1][1] == 1 && gameState_var[2][1] == 1) || (gameState_var[0][1] == 2 && gameState_var[1][1] == 2 && gameState_var[2][1] == 2)) { this.victoryAnimation("0,1,1,1,2,1") }
        else if ((gameState_var[0][2] == 1 && gameState_var[1][2] == 1 && gameState_var[2][2] == 1) || (gameState_var[0][2] == 2 && gameState_var[1][2] == 2 && gameState_var[2][2] == 2)) { this.victoryAnimation("0,2,1,2,2,2") }
        else if ((gameState_var[0][0] == 1 && gameState_var[0][1] == 1 && gameState_var[0][2] == 1) || (gameState_var[0][0] == 2 && gameState_var[0][1] == 2 && gameState_var[0][2] == 2)) { this.victoryAnimation("0,0,0,1,0,2") }
        else if ((gameState_var[1][0] == 1 && gameState_var[1][1] == 1 && gameState_var[1][2] == 1) || (gameState_var[1][0] == 2 && gameState_var[1][1] == 2 && gameState_var[1][2] == 2)) { this.victoryAnimation("1,0,1,1,1,2") }
        else if ((gameState_var[2][0] == 1 && gameState_var[2][1] == 1 && gameState_var[2][2] == 1) || (gameState_var[2][0] == 2 && gameState_var[2][1] == 2 && gameState_var[2][2] == 2)) { this.victoryAnimation("2,0,2,1,2,2") }
        else if ((gameState_var[0][0] == 1 && gameState_var[1][1] == 1 && gameState_var[2][2] == 1) || (gameState_var[0][0] == 2 && gameState_var[1][1] == 2 && gameState_var[2][2] == 2)) { this.victoryAnimation("0,0,1,1,2,2") }
        else if ((gameState_var[0][2] == 1 && gameState_var[1][1] == 1 && gameState_var[2][0] == 1) || (gameState_var[0][2] == 2 && gameState_var[1][1] == 2 && gameState_var[2][0] == 2)) { this.victoryAnimation("0,2,1,1,2,0") }
        else { console.log("juego sin ganador todavia") }
    }

    victoryAnimation = (ops) => {
        this.setState({
            victory: 1
        })
        if (ops == "0,0,1,0,2,0") {
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-success")
        }
        if (ops == "0,1,1,1,2,1") {
            document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-success")
        }
        if (ops == "0,2,1,2,2,2") {
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-success")
        }
        if (ops == "0,0,0,1,0,2") {
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-success")
        }
        if (ops == "1,0,1,1,1,2") {
            document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-success")
        }
        if (ops == "2,0,2,1,2,2") {
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-success")
        }
        if (ops == "0,0,1,1,2,2") {
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-success")
        }
        if (ops == "0,2,1,1,2,0") {
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-success")
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-secondary")
            document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-success")
        }
    }

    reset = () => {

        gameState_var = [[0, 0, 0],
                         [0, 0, 0],
                         [0, 0, 0]]

        this.setState({
            user: this.props.weapon,
            gameState: gameState_var,
            victory: 0,
        })
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(2) > :nth-child(1)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(2) > :nth-child(2)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(2) > :nth-child(3)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(3) > :nth-child(1)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(3) > :nth-child(2)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(3) > :nth-child(3)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(4) > :nth-child(1)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(4) > :nth-child(2)").classList.add("bg-secondary")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.remove("bg-success")
        document.querySelector("#game > :nth-child(4) > :nth-child(3)").classList.add("bg-secondary")
    }

    render() {
        return (
            <div className="container bg-dark pb-5" id="game">
                <div className="row d-flex justify-content-center align-items-center p-2">
                <div className="col-2">
                         <h1> {this.state.playedCross}<FaPlus size="65px" /> </h1>
                                   
                    </div>
                    
                    <div className="col-8">
                        {this.state.victory == 0 ? <h1> Turn of {this.state.currPlayer} </h1>
                            : this.state.victory == 1 && this.state.currPlayer == this.state.playedCircle ? <h1 id="title">  {this.state.playedCross} has Won! </h1>
                                : this.state.victory == 1 && this.state.currPlayer == this.state.playedCross ? <h1 id="title">  {this.state.playedCircle} has Won! </h1>
                                    : "error here"}
                    </div>
                    <div className="col-2">
                         <h1>{this.state.playedCircle} <FaRegCircle size="65px"/> </h1>       
                    </div>
                    <button type="button" className="btn btn-light" onClick={this.reset}>Reset Game</button>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3 align-items-center justify-content-center square border-right border-bottom px-5 d-flex bg-secondary" id="0,0" onClick={this.gameHandler}>
                        {this.state.gameState[0][0] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[0][0] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square border-right border-bottom d-flex bg-secondary" id="0,1" onClick={this.gameHandler}>
                        {this.state.gameState[0][1] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[0][1] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square d-flex border-bottom  bg-secondary" id="0,2" onClick={this.gameHandler}>
                        {this.state.gameState[0][2] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[0][2] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3 align-items-center justify-content-center square border-right border-bottom d-flex  bg-secondary" id="1,0" onClick={this.gameHandler}>
                        {this.state.gameState[1][0] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[1][0] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square border-right border-bottom d-flex  bg-secondary" id="1,1" onClick={this.gameHandler}>
                        {this.state.gameState[1][1] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[1][1] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square d-flex border-bottom  bg-secondary" id="1,2" onClick={this.gameHandler}>
                        {this.state.gameState[1][2] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[1][2] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3 align-items-center justify-content-center square border-right d-flex  bg-secondary" id="2,0" onClick={this.gameHandler}>
                        {this.state.gameState[2][0] === 1 ? <FaPlus size="65px" className="align-self-center" />
                            : this.state.gameState[2][0] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square border-right d-flex  bg-secondary" id="2,1" onClick={this.gameHandler}>
                        {this.state.gameState[2][1] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[2][1] === 2 ? <FaRegCircle size="65px"/>
                                :<FaRegCircle size="65px" className="invisible"/> }
                    </div>
                    <div className="col-3 align-items-center justify-content-center square d-flex bg-secondary" id="2,2" onClick={this.gameHandler}>
                        {this.state.gameState[2][2] === 1 ? <FaPlus size="65px" />
                            : this.state.gameState[2][2] === 2 ? <FaRegCircle size="65px"/>
                                : <FaRegCircle size="65px" className="invisible"/> }
                    </div>
                </div>
            </div>
        )
    }
}


export default Game;