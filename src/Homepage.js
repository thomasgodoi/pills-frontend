import React, { useState } from "react";
import PickYourPoisonLine from "./Components/PickYourPoison/PickYourPoisonLine";
import Footer from "./Components/Footer/Footer";

import Pill from "./Components/Pill/Pill";


export default function Homepage() {
    const [bluePill, setBluePill] = useState(null);
    const [redPill, setRedPill] = useState(null);

    function handleBluePillWins(){
        console.log('blue pill wins!');
        setBluePill(true);
        setRedPill(false);
    }

    function handleRedPillWins() {
        console.log('red pill wins!');
        setRedPill(true);
        setBluePill(false);
    }

    return (
        <div className="App">
            <body className="App-header">
                <div className="wyr-div">
                    <span>
                        Would You Rather:
                    </span>
                </div>

                <div className="pills-div">
                    <div>
                        <Pill isWinner={bluePill}/>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill blue" onClick={handleBluePillWins}><span>Take blue pill</span></button>
                        </div>
                    </div>
                    <div>
                        <Pill isWinner={redPill}/>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill red" onClick={handleRedPillWins}><span>Take red pill</span></button>
                        </div>
                    </div>

                </div>
                <PickYourPoisonLine />
            </body>
            <br/>
            <Footer />
      </div>
    )
}