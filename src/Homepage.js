import React from "react";

import LeftButton from "./Components/LeftButton/LeftButton";
import RightButton from "./Components/RightButton/RightButton";
import PickYourOptionLine from "./Components/PickYourOptionPhrase/PickYourOptionLine";
import { PerkDataService } from "./Services/PerkDataService";

import GitHub from "../src/Icons/Homepage/icon-github.svg";

export default function Homepage() {

    const tst = () => {
        return (
            PerkDataService.getTeste().then(response => {
                console.log("response => ", response.data)
            })
        )        
    }

    return (
        <div className="App">
            <header className="App-header">
                <PickYourOptionLine />
                <span style={{fontSize:'14px'}}>Would you rather:</span>

                <div className="pills-div">
                    <div>
                        <LeftButton />
                        {/* <button>Take red pill</button> */}
                        <button onClick={tst}>Button 1</button>
                    </div>
                    <div>
                        <RightButton />
                        {/* <button>Take blue pill</button> */}
                        <button onClick={PerkDataService.logRandomNumber}>Button 2</button>
                    </div>
                </div>
            </header>
            <footer style={{height:"30px", background: "#3a3f4a", display:"flex", justifyContent:"center"}}>
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "200px"}}>
                    <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}}/>
                    <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}}/>
                </div>
            </footer>
      </div>
    )
}