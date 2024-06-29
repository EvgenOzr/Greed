import React, {useState, useEffect} from 'react';
import {Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './App.css'
import DiceView from '../Dice/Dice';
import Greed from '../Greed'

function App(): JSX.Element {

	const [dices, setDices] = useState([0, 0, 0, 0, 0, 0])
	const [score, setScore] = useState(0)

	const Game = () => {
		let newDices = []
		for(let i = 0; i < 6; i++) {
			const newDice = 1 + Math.round(Math.random() * (6 - 1));
			newDices.push(newDice)
		}
		setDices(newDices);
		// setVariant(1 + Math.round(Math.random() * (6 - 1)));
	}

	useEffect(() => {
		// setScore(0)
		setTimeout(() => {setScore(Greed(dices))}, 500)
	}, [dices])

	return (
		<div className="app">
			<Row>
				<Col>
					<Button className='gameButton' variant="warning" onClick={Game}>Game!</Button>
				</Col>
				<Col>
					<div>Score:{score}</div>
				</Col>
			</Row>
			<Row>
				<DiceView dices={dices}/>
			</Row>
		</div>
	)
	}

export default App;
