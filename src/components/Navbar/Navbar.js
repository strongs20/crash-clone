import React from 'react'
import "./Navbar.css";
import updateBalance from '../Balance.js'
import { useState } from 'react';
import GameContainer from '../Game/Game.js';

//Save balance variable
localStorage.setItem("Balance", 10.01);

const Navbar = () => {
    function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }
    
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
    }

    // This is the user's balance
    const [balance, setBalance] = useState(parseFloat(localStorage.getItem("Balance")));
    const [tempBalance, setTempBalance] = useState(0);
    const [showEdit, setShowEdit] = useState(false);
    const [errMsg, setErrMsg] = useState("Must contain 8 decimals!");
    
    // Function to count decimals of input
    var countDecimals = function(value) {
        let text = value.toString()
        // verify if number 0.000005 is represented as "5e-6"
        if (text.indexOf('e-') > -1) {
          let [base, trail] = text.split('e-');
          let deg = parseInt(trail, 10);
          return deg;
        }
        // count decimals for number in representation like "0.123456"
        if (Math.floor(value) !== value) {
          return value.toString().split(".")[1].length || 0;
        }
        return 0;
    }

    const changeBalance = (val) => {
        if (1===1) {
            setErrMsg("");
            localStorage.setItem("Balance", tempBalance);
            setBalance(tempBalance);
            // console.log(parseFloat(localStorage.getItem("Balance")));
        }
        else {
            setErrMsg("Must contain 2 decimals!");
        }
    }

    if (showEdit) {
        return (
            <div className="Nav">
                    <img
                       src = "https://www.casinos.info/wp-content/uploads/stake-casino-logo.jpg"
                       alt = "stake-logo"
                       height="60"
                       width="80"
                    />
                <div className = "balance">${balance.toFixed(2)}</div>
                <div className = "currency">
                    <img
                       src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F46%2FBitcoin.svg%2F1200px-Bitcoin.svg.png&f=1&nofb=1"
                       alt = "btc-logo"
                       height="15"
                       width="15"
                    />
                </div>
                <div className = "change_currency">
                    <img
                       src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2FC%2FC%2Ft%2Fu%2FL%2F0%2Farrow-down-gray-hi.png&f=1&nofb=1"
                       alt = "btc-logo"
                       height="8"
                       width="14"
                    />
                </div>
                <button>Wallet</button>
                <div className = "edit_balance">
                   <input
                   type="text"
                   placeholder="Enter 2-decimal value"
                   defaultValue={0.00}
                   onChange={(e) => {
                       setTempBalance(e.target.value);
                   }}
                   />
                   <div>
                   <br></br>
                   <button onClick={() => changeBalance(parseFloat(tempBalance.toFixed(2)))}>Confirm</button>
                   <button onClick={() => setShowEdit(false)}>Close</button>
                   </div>
                   <h1>{errMsg}</h1>
                </div>
            </div>
       );
    } else {
        return (
            <div className="Nav">
                <GameContainer setBalance={setBalance} balance={balance}></GameContainer>
                    <img
                       src = "https://www.casinos.info/wp-content/uploads/stake-casino-logo.jpg"
                       alt = "stake-logo"
                       height="60"
                       width="80"
                    />
                <div className = "balance">${balance.toFixed(2)}</div>
                <div className = "currency">
                    <img
                       src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F46%2FBitcoin.svg%2F1200px-Bitcoin.svg.png&f=1&nofb=1"
                       alt = "btc-logo"
                       height="15"
                       width="15"
                    />
                </div>
                <div className = "change_currency">
                    <img
                       src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2FC%2FC%2Ft%2Fu%2FL%2F0%2Farrow-down-gray-hi.png&f=1&nofb=1"
                       alt = "btc-logo"
                       height="8"
                       width="14"
                    />
                </div>
                <button onClick={() => setShowEdit(true)}>Wallet</button>
            </div>
       );
    }
};

export default Navbar;