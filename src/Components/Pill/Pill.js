// /* eslint-disable */

import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";
// import PickStatistics from "../PickStatistics/PickStatistics";

import '../Styles/Pill.css';

export default function LeftButton(props) {
    const [perks, setPerks] = useState([]);
    const [perkIdList, setPerkIdList] = useState([]);

    // const [isStatsShowing, setIsStatsShowing] = useState(false);

    const cyan = "rgb(0, 255, 255)";
    const cyanShadow = "0 0 3px rgb(0, 255, 255, 0.6)";
    const red = "rgb(255, 0, 0)";
    const redShadow = "0 0 3px rgb(255, 0, 0, 0.6)";
    const whiteShadow = "0 0 3px rgb(255, 255, 255, 0.3)";

    useEffect(() => {
        getPerks();
    }, [])

    async function getPerks() {
        let arr =[]
        await PerkDataService.getPerks().then(response => {
            response.data.forEach(el => {
                arr.push(el.id)
            })
            setPerkIdList(arr);
            setPerks(response.data);

        })
    }

    // useEffect(() => {
    //     setIsStatsShowing(props.stats);
    // }, [props.stats])


    useEffect(() => {

        function handleWinnerPill(idList) {
            if(props.isWinner) {
                PerkDataService.sendPerksScore(idList, true);
            }

            if(!props.isWinner) {
                PerkDataService.sendPerksScore(idList, false);
            }
        }

        if(perkIdList.length > 0) {
            handleWinnerPill(perkIdList);
        }
    }, [props.isWinner])

    // function handleWinnerPill(blue, red) {
    //     setBluePill(blue);
    //     setRedPill(red);
    // }

    return (
        <div style={{fontSize:'12px', textAlign:'center'}}>

            {/* <ul style={{listStyle: "none"}}>
            {perks.map((el, key) => 
                <div className="perk-list" key={key} style={{ border:"1px solid red", color: el.isPositive ? cyan : red, textShadow: el.isPositive ? cyanShadow : redShadow }}>
                    <li className="description">{el.description}</li>
                    {el.additionalInfo !== null &&
                        <li><span style={{cursor:"help"}} title={el.additionalInfo}> &nbsp; ⓘ &nbsp;</span></li>
                    }
                    <li style={{display: displayStatistics}}>{el.timesWon}</li>
                    <li style={{display: displayStatistics}}>{el.timesLost}</li>
                    <li className="tier" style={{color: PerkDataService.handleTierColor(el.tier), textShadow: PerkDataService.handleTierShadow(el.tier), display: displayStatistics}}>{el.tier}</li>
                </div>
            )}
            </ul> */}
                {/* <button onClick={() => console.log("perkIdListRef =>", perkIdListRef)}>perkIdListRef</button>
                <button onClick={() => console.log("perkIdList =>", perkIdList)}>perkIdList</button> */}

        <table>
            {perks.map((el, key) => 
                <tbody key={key}>
                    <tr>
                        <td style={{textShadow: el.isPositive ? cyanShadow : redShadow, minWidth: "400px"}}>
                            <span style={{color: el.isPositive ? cyan : red}}>
                                {el.description} 
                                {el.additionalInfo !== null &&
                                    <sup style={{color:"white", textShadow: whiteShadow, marginLeft:"10px", cursor: "help"}} title={el.additionalInfo}>
                                        Rules
                                    </sup>
                                }
                            </span>
                        </td>
                    </tr>
                </tbody>
            )}
            </table>
            {/* <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="pill redColor" onClick={() => handleWinnerPill(false, true)}><span>Take red pill</span></button>
            </div>
                <button className="show-stats-btn">Show stats</button> */}

            {/* <div style={{background: "rgb(0, 0, 0, 0.4)", width: "100vw", height:"100vh", display: isStatsShowing ? "block" : "none"}}>
                <div style={{background: "rgb(255, 255, 255)", width: "500px", height: "500px", color: "white"}}>
                    <span> sei lá hehe xD</span>
                    <span> sei lá hehe xD</span>
                    <span> sei lá hehe xD</span>
                </div>
            </div> */}
        </div>
    )

}
