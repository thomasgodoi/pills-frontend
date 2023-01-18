import React, { useEffect, useState, useRef } from "react";
import { PerkDataService } from "../../Services/PerkDataService";
// import PickStatistics from "../PickStatistics/PickStatistics";

import '../Styles/Pills.css';

export default function LeftButton(props) {
    const [perks, setPerks] = useState([]);
    const [perkIdList, setPerkIdList] = useState([]);
    const perkIdListRef = useRef(perkIdList);

    const cyan = "rgb(0, 255, 255)";
    const cyanShadow = "0 0 3px rgb(0, 255, 255, 0.6)";
    const red = "rgb(255, 0, 0)";
    const redShadow = "0 0 3px rgb(255, 0, 0, 0.6)";
    const whiteShadow = "0 0 3px rgb(255, 255, 255, 0.3)";

    useEffect(() => {
        getPerks();
    }, [])

    async function getPerks() {
        await PerkDataService.getPerks().then(response => {
            setPerks(response.data);
        })
    }

    useEffect(() => {
        function getPerkIdList() {
            const arr =[];
    
            perks.forEach(perk => {
                arr.push(perk.id);
            });
    
            setPerkIdList(arr);
        }

        getPerkIdList()
    }, [perks])



    useEffect(() => {

        function handleWinnerPill() {
            if(props.isWinner) {
                PerkDataService.sendPerksScore(perkIdListRef, true);
            }

            if(!props.isWinner) {
                PerkDataService.sendPerksScore(perkIdListRef, false);
            }
        }

        if(perkIdListRef.length > 0) {
            handleWinnerPill(perkIdListRef);
        }
    }, [props.isWinner])

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
        </div>
    )

}
