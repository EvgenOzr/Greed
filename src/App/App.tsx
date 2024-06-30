import React, {useState, useEffect, useRef} from 'react';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './App.css'
import DiceView from '../Dice/Dice';
import Greed from '../Greed'

function App(): JSX.Element {

	const [dices, setDices] = useState([1, 1, 1, 1, 1])
	const [score, setScore] = useState(0)
	const startGame = useRef(false);
	

	const Game = () => {
		let newDices = []

		for(let i = 0; i < 5; i++) {
			const newDice = 1 + Math.round(Math.random() * (6 - 1));
			newDices.push(newDice)
		}
		startGame.current = true;
		setDices(newDices);
	}

	useEffect(() => {
		if(startGame.current) {
			const greed = setTimeout(() => {setScore(Greed(dices))}, 3000)
			return () => clearTimeout(greed);
		}
	}, [dices])

	return (
		<div className="app">
			<div className="header"> Greed game</div>
			<Row className='headerRow'>
				<Col className='colGame'>
					<Button className='gameButton' variant="warning" onClick={Game}>Game!</Button>
				</Col>
				<Col className='colScore'>
					<div>Score: {score}</div>
				</Col>
			</Row>
			<Row className='rowDice'>
				<DiceView dices={dices} startGame = {startGame.current}/>
			</Row>
			<div className='labelScore'>
				<div>{`Three 1's => 1000 points`}</div>
				<div>{`Three 6's => 600 points`}</div>
				<div>{`Three 5's =>  500 points`}</div>
				<div>{`Three 4's =>  400 points`}</div>
				<div>{`Three 3's =>  300 points`}</div>
				<div>{`Three 2's =>  200 points`}</div>
				<div>{`One   1   =>  100 points`}</div>
				<div>{`One   5   =>   50 point`}</div>
			</div>
		</div>
	)
	}

export default App;
