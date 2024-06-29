import React, {useState, useEffect} from "react";
import './Dice.css'

interface Props {
    variant: number
}

interface ArrayProps {
    dices: number[]
}

const Dice = ({variant} : Props) => {

    return (
        <>
        {(variant === 0) &&
            <div className="first-face">
            </div>}
         {(variant === 1) &&
            <div className="first-face">
                <span className="pip"></span>
            </div>}
        {(variant === 2) &&
            <div className="second-face">
                <span className="pip"></span>
                <span className="pip"></span>
            </div>}
        {(variant === 3) &&
        <div className="third-face">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>}
        {(variant === 4) &&
        <div className="fourth-face">
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
        <div className="fifth-face">
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
        <div className="sixth-face">
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

const DiceView = ({dices} : ArrayProps) => {


    const renderDiceView = (elem: number, idx: number) => {
        return (
            <li key={idx}>{<Dice variant={elem}/>}</li>
        )
    }
    
    return (
        <ul className="dicesView">
            {dices.map(renderDiceView)}
        </ul>
    )

}

export default DiceView;