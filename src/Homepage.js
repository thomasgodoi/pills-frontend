import React, { useState } from "react";
import PickYourOptionLine from "./Components/PickYourOptionPhrase/PickYourOptionLine";
import Footer from "./Components/Footer/Footer";

import LeftButton from "./Components/Pill/Pill";
// import RightButton from "./Components/RightButton/RightButton";



export default function Homepage() {
    const [bluePill, setBluePill] = useState(null);
    const [redPill, setRedPill] = useState(null);

    const handleBluePillWins = () =>{
        console.log('blue pill wins!');
        setBluePill(true);
        setRedPill(false);
    }

    const handleRedPillWins = () =>{
        console.log('red pill wins!');
        setRedPill(true);
        setBluePill(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <PickYourOptionLine />
                <span style={{fontSize:'18px', fontStyle:"italic", textShadow:"0 0 3px rgb(255, 255, 255, 0.3)"}}>Would you rather:</span>

                <div className="pills-div">
                    <div>
                        <LeftButton isWinner={bluePill}/>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="option1-btn" onClick={handleBluePillWins}><span>Take blue pill</span></button>
                        </div>
                    </div>
                    <div>
                        <LeftButton isWinner={redPill}/>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <button className="option2-btn" onClick={handleRedPillWins}><span>Take red pill</span></button>
                        </div>
                    </div>

                </div>
            </header>
            <br/>
            <Footer />
      </div>
    )
}