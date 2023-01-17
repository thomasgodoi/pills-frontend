import React from "react";

import LeftButton from "./Components/LeftButton/LeftButton";
// import RightButton from "./Components/RightButton/RightButton";
import PickYourOptionLine from "./Components/PickYourOptionPhrase/PickYourOptionLine";
// import { PerkDataService } from "./Services/PerkDataService";

import Footer from "./Components/Footer/Footer";

export default function Homepage() {

    // const getAllPerks = () => {
    //     return (
    //         PerkDataService.getAllPerks().then(response => {
    //             console.log("response => ", response.data)
    //         })
    //     )        
    // }

    // const getPerkById = (perkId) => {
    //     return (
    //         PerkDataService.getPerkById(22).then(response => {
    //             console.log("response => ", response.data)
    //         })
    //     )        
    // }

    // const getPositivePerks = () => {
    //     return (
    //         PerkDataService.getPositivePerks().then(response => {
    //             console.log("response => ", response.data.content)
    //         })
    //     )        
    // }

    // const getNegativePerks = () => {
    //     return (
    //         PerkDataService.getNegativePerks().then(response => {
    //             console.log("response => ", response.data.content)
    //         })
    //     )        
    // }

    // const sendPerksScore = (perkIdList, isWinner) => {
    //     return PerkDataService.sendPerksScore([1,2,3], true);  
    // }


    return (
        <div className="App">
            <header className="App-header">
                <PickYourOptionLine />
                <span style={{fontSize:'14px'}}>Would you rather:</span>

                <div className="pills-div">
                    <div>
                        <LeftButton />
                        {/* <button>Take red pill</button> */}
                    </div>
                    {/* <div>
                        <RightButton />
                        <button>Take blue pill</button>
                    </div> */}
                </div>
            </header>
            <br/>
            <Footer />
      </div>
    )
}