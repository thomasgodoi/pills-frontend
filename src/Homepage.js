import React, { useState } from "react";
import PickYourPoisonLine from "./Components/PickYourPoison/PickYourPoisonLine";
import Footer from "./Components/Footer/Footer";

import Pill from "./Components/Pill/Pill";

export default function Homepage() {
    const [bluePill, setBluePill] = useState(null);
    const [redPill, setRedPill] = useState(null);

    // const [showStatsBluePill, setShowStatsBluePill] = useState(false);
    // const [showStatsRedPill, setShowStatsRedPill] = useState(false);

    function handleWinnerPill(blue, red) {

        setBluePill(blue);
        setRedPill(red);
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
                        <Pill isWinner={bluePill}  />
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill cyanColor" onClick={() => handleWinnerPill(true, false)}><span>Take blue pill</span></button>
                        </div>
                        <button className="show-stats-btn">Show stats</button>

                    </div>
                    <div>
                        <Pill isWinner={redPill} />
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill redColor" onClick={() => handleWinnerPill(false, true)}><span>Take red pill</span></button>
                        </div>
                            <button className="show-stats-btn">Show stats</button>

                    </div>
                </div>
                <PickYourPoisonLine />
            </body>
            <br/>
            <Footer />
      </div>
    )
}