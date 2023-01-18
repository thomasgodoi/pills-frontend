import React from "react";
import PickYourOptionLine from "./Components/PickYourOptionPhrase/PickYourOptionLine";
import Footer from "./Components/Footer/Footer";

import LeftButton from "./Components/LeftButton/LeftButton";
// import RightButton from "./Components/RightButton/RightButton";



export default function Homepage() {

    return (
        <div className="App">
            <header className="App-header">
                <PickYourOptionLine />
                <span style={{fontSize:'14px'}}>Would you rather:</span>

                <div className="pills-div">
                    <div>
                        <LeftButton />
                    </div>
                </div>
            </header>
            <br/>
            <Footer />
      </div>
    )
}