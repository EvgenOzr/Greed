import React, {useState, useEffect} from "react";
import './Dice.css'

interface Props {
    variant: number,
    rotate: number
}

interface ArrayProps {
    dices: number[],
    startGame: boolean
}

const Dice = ({variant, rotate} : Props) => {

    return (
        <>
         {(variant === 1) &&
            <div style={{transform: `rotate(${rotate}turn`}} className="first-face">
                <span className="pip"></span>
            </div>}
        {(variant === 2) &&
            <div style={{transform: `rotate(${rotate}turn`}} className="second-face">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>}
        {(variant === 3) &&
        <div style={{transform: `rotate(${rotate}turn`}} className="third-face">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>}
        {(variant === 4) &&
        <div style={{transform: `rotate(${rotate}turn`}} className="fourth-face">
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        </div>}
        {(variant === 5) &&
        <div style={{transform: `rotate(${rotate}turn`}} className="fifth-face">
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="column">
                <span className="pip"></span>
            </div>
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        </div>}
        {(variant === 6) &&
        <div style={{transform: `rotate(${rotate}turn`}} className="sixth-face">
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="column">
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        </div>}
        </>
    )
}

const DiceView = ({dices, startGame} : ArrayProps) => {

    const [rotate, setRotate] = useState(0)
    const [newDices, setNewDices] = useState([1, 1, 1, 1, 1])

    useEffect (() => {
        if(startGame){
            const rotation = setInterval(() => {
                    setRotate((r) => r + 0.21)
                }, 200)
            setTimeout(() => {
                setRotate(0)
                clearInterval(rotation)
                setNewDices(dices);
            }, 2700)
        }
    }, [dices, startGame])

    useEffect (() => {
        setNewDices(dices);
    }, [])

    const renderDiceView = (elem: number, idx: number) => {
        return (
            <li key={idx}>{<Dice rotate={rotate} variant={elem}/>}</li>
        )
    }

    return (
        <ul className="dicesView">
            {newDices.map(renderDiceView)}
        </ul>
    )

}

export default DiceView;