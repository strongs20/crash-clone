import React from 'react'
import "./Navbar.css";
// import {Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//     NavBalance} from './NavbarElements'
// import 

const Navbar = () => {
    return (
         <div className="Nav">
                 <img
                    src = "https://www.casinos.info/wp-content/uploads/stake-casino-logo.jpg"
                    alt = "stake-logo"
                    height="60"
                    width="80"
                 />
             <div className = "balance">0.000000000</div>
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
             <button>Deposit</button>
         </div>
    );
};

export default Navbar;