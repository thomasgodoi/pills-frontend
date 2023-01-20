import React, { useState } from "react";
import PickYourPoisonLine from "./Components/PickYourPoison/PickYourPoisonLine";
import Footer from "./Components/Footer/Footer";
import {PerkDataService} from "./Services/PerkDataService";

import Pill from "./Components/Pill/Pill";

export default function Homepage() {
    const [bluePill, setBluePill] = useState(null);
    const [redPill, setRedPill] = useState(null);

    const [showStatsBluePill, setShowStatsBluePill] = useState(false);
    const [showStatsRedPill, setShowStatsRedPill] = useState(false);

    function handleWinnerPill(blue, red) {
        setBluePill(blue);
        setRedPill(red);
    }

    function handleShowStats(blue, red) {
        setShowStatsBluePill(blue);
        setShowStatsRedPill(red);
    }

    function hideStatsBtn(status) {
        if(status) {
            setShowStatsBluePill(false);
            setShowStatsRedPill(false);
        }

    }

    return (
        <div className="App">
            <div className="App-header">
                <div className="wyr-div">
                    <span>
                        Would You Rather:
                    </span>
                </div>
                <div className="pills-div">
                    <div>
                        <Pill isWinner={bluePill} stats={showStatsBluePill} hideStats={hideStatsBtn} />
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill cyanColor" onClick={() => handleWinnerPill(true, false)}><span>Take blue pill</span></button>
                        </div>
                        <button className="show-stats-btn" onClick={() => handleShowStats(true, false)}>Show stats</button>

                    </div>
                    <div>
                        <Pill isWinner={redPill} stats={showStatsRedPill} hideStats={hideStatsBtn} />
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="pill redColor" onClick={() => handleWinnerPill(false, true)}><span>Take red pill</span></button>
                        </div>
                            <button className="show-stats-btn" onClick={() => handleShowStats(false, true)}><span>Show stats</span></button>

                    </div>
                </div>
                <PickYourPoisonLine />
            </div>
            <br/>
            <Footer />
      </div>
    )
}