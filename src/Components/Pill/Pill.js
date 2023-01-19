// /* eslint-disable */

import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";
// import PickStatistics from "../PickStatistics/PickStatistics";

import '../Styles/Pill.css';

export default function LeftButton(props) {
    const [perks, setPerks] = useState([]);
    const [perkIdList, setPerkIdList] = useState([]);


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

    const [isStatsShowing, setIsStatsShowing] = useState(false);
    useEffect(() => {
        setIsStatsShowing(props.stats);
    }, [props.stats])


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

    function hideStatsModal(status) {
        props.hideStats(true);

        return setIsStatsShowing(status);
    }

    
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

            <div onClick={() => hideStatsModal(false)} style={{background: "rgb(0, 0, 0, 0.4)", backdropFilter:"blur(2px)", width: "100vw", height:"100vh", display: isStatsShowing ? "block" : "none", position: "absolute", left:"50%", bottom:"50%", transform: "translate(-50%, 50%)"}}>
                <div style={{background: "rgb(30, 30, 30)", width: "80vw", padding:"30px", color: "white", position:"inherit", left:"inherit", bottom:"inherit", transform:"inherit", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "10px", boxShadow: "0 0 10px rgb(0, 0, 0, 0.8)"}}>
                    
                    <p>No, totally not nerdy stuff</p>
                    
                    <table style={{width: "100%", borderCollapse: "collapse", borderLeft: "2px solid rgb(25,25,25)", borderRight: "2px solid rgb(25,25,25)"}}>
                        <thead>
                            <tr style={{backgroundColor: "rgb(200, 0, 0)"}}>
                                <td>Perk</td>
                                <td>Times won</td>
                                <td>Times lost</td>
                                <td>Tier</td>
                            </tr>
                        </thead>

                        <tbody className="stats">
                            {perks.map((el, key) => 
                                <tr key={key}>
                                    <td style={{minWidth: "80px", padding:"3px 10px"}}>
                                        {el.description} 
                                        {el.additionalInfo !== null &&
                                            <sup>
                                                Rules
                                            </sup>
                                        }
                                    </td>
                                    <td style={{minWidth: "80px", padding:"3px 10px"}}>
                                        {el.timesWon}
                                    </td>
                                    <td style={{minWidth: "80px", padding:"3px 10px"}}>
                                        {el.timesLost}
                                    </td>
                                    <td style={{minWidth: "80px", padding:"3px 10px"}}>
                                        {el.tier}
                                    </td>                                    
                                </tr>
                            )}  
                        </tbody>
                    </table>
                    <div style={{border:"1px solid red", width:"100%"}}>
                        <p>Pills Hall of Fame</p>


                        <ul style={{listStyle:"none"}}>
                            <li>
                                <b>MOST SUCCESSFULL:</b>
                                <span>most successfull</span>
                            </li>
                            <li>
                                <b>WEAKEST:</b>
                                <span> weakest</span>
                            </li>
                            
                            <li>
                                <b>HOT STREAK:</b>
                                <span>hot streak</span>
                            </li>
                        </ul>



                    </div>
                </div>
            </div>
                    {/* <table>
                            <tbody>
                                <tr>
                                    {perks.map((el, key) => {
                                        <td style={{textShadow: el.isPositive ? cyanShadow : redShadow, minWidth: "400px"}}>
                                            <span style={{color: el.isPositive ? cyan : red}}>
                                                {el.description} 
                                                {el.additionalInfo !== null &&
                                                    <sup style={{color:"white", textShadow: whiteShadow, marginLeft:"10px", cursor: "help"}} title={el.additionalInfo}>
                                                        Rules
                                                    </sup>
                                                }
                                                {el.timesWon}
                                                {el.timesLost}
                                                {el.tier}
                                            </span>
                                        </td>
                                    })}
                                </tr>
                            </tbody>
                        </table> */}
        </div>
    )

}
