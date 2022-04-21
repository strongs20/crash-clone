import React from 'react'
import { useState } from 'react';
import "./Game.css";
import Navbar from '../Navbar/Navbar.js'

const GameContainer = ({setBalance, balance}) => {
    const [randInt, setRandInt] = useState(Math.floor(Math.random() * 10));
    const [betAmt, setBetAmt] = useState(0);

    const minusBalance = (val) => {
        setBalance(parseFloat(balance)-val);
        setBetAmt(betAmt+val);
    }
    let value = balance-1;

    const roll = () => {
        let newRand = Math.floor(Math.random() * 10)
        setRandInt(newRand);
        if (newRand >= 5){
            minusBalance(-2*betAmt);
        }
        setBetAmt(0);
    }

    return (
        <div>
         <div className='Game'>
             <button onClick={() => minusBalance(1)}>Bet 1 (Next Round)</button>
             <button onClick={() => roll()}>Roll</button>
         </div>
         <div className='Game'>
             <h1>{randInt}</h1>
             <h1>{betAmt}</h1>
         </div>
         </div>
    );
};

export default GameContainer;