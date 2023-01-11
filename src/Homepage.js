import React from "react";
import logo from './logo.svg';

import LeftButton from './Components/LeftButton/LeftButton';
import RightButton from './Components/RightButton/RightButton';
import PickYourOptionLine from "./Components/PickYourOptionPhrase/PickYourOptionLine";

export default function Homepage() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <PickYourOptionLine />
                <span style={{fontSize:'14px'}}>Would you rather:</span>

                <div style={{display:'grid'}}>

                    <LeftButton />
                    ------------------------------------
                    <RightButton />
                    
                </div>
            </header>
      </div>
    )
}