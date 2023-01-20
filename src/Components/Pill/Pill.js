// /* eslint-disable */

import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";
// import PickStatistics from "../PickStatistics/PickStatistics";

import '../Styles/Pill.css';

export default function LeftButton(props) {
    const [perks, setPerks] = useState([]);
    const [perkIdList, setPerkIdList] = useState([]);

    const [perkMostWins, setPerkMostWins] = useState({});
    const [perkMostLosses, setPerkMostLosses] = useState({});
    const [perkHotStreak, setPerkHotStreak] = useState({});

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
        PerkDataService.getPerkMostWins().then(response => {
            setPerkMostWins(response.data)
        })

        PerkDataService.getPerkMostLosses().then(response => {
            setPerkMostLosses(response.data)
        })

        PerkDataService.getPerkHotStreak().then(response => {
            setPerkHotStreak(response.data)
        })
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

            <div className="pill-stats" onClick={() => hideStatsModal(false)} style={{display: isStatsShowing ? "block" : "none"}}>
                <div className="pill-stats-div">                    

                    <p className="pill-stats-title">Pill Statistics</p>

                    
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
                                    <td>
                                        {el.description} 
                                        {el.additionalInfo !== null &&
                                            <sup>
                                                Rules
                                            </sup>
                                        }
                                    </td>
                                    <td>{el.timesWon}</td>
                                    <td>{el.timesLost}</td>
                                    <td style={{color: PerkDataService.handleTierColor(el.tier), textShadow: PerkDataService.handleTierShadow(el.tier)}}>
                                        {el.tier}
                                    </td>                                    
                                </tr>
                            )}  
                        </tbody>
                    </table>
                    <div  className="list-hof">
                        <p className="pill-stats-title">Hall of Fame</p>
                        <ul>
                            <li>
                                <b title="This is the most picked perk. Unlike billionaires, this perk actually worked its way to the top">
                                    STRONGEST:
                                </b>
                                <div className="perk-hof-div">
                                    <div>
                                        <span>{perkMostWins.description}</span>
                                        {perkMostWins.additionalInfo !== null &&
                                            <sup title={perkMostWins.additionalInfo}>
                                                Rules
                                            </sup>
                                        }
                                    </div>
                                    <div>
                                        <span style={{marginLeft:"20px", display: "flex", alignItems: "center"}}>
                                            <span style={{color:"red"}}>⇒ &nbsp;
                                            </span> {perkMostWins.timesWon}  wins
                                        </span>
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <b title="This is the least picked perk.">
                                    WEAKEST:
                                </b>
                                <div className="perk-hof-div">
                                    <div>
                                        <span>{perkMostLosses.description}</span>
                                        {perkMostLosses.additionalInfo !== null &&
                                            <sup>
                                                ({perkMostLosses.additionalInfo})
                                            </sup>
                                        }
                                    </div>
                                    <div>
                                        <span style={{marginLeft:"20px", display: "flex", alignItems: "center"}}>
                                            <span style={{color:"red"}}>⇒ &nbsp; </span>
                                            {perkMostLosses.timesLost}  losses
                                        </span>
                                    </div>
                                </div>
                            </li>                            
                            <li>
                                <b title="This is the best perk in recent performance. +1 anytime when selected, -1 everytime when it isn't">
                                    HOT STREAK:
                                </b>
                                <div className="perk-hof-div">
                                    <div>
                                        <span>{perkHotStreak.description}</span>
                                        {perkMostLosses.additionalInfo !== null &&
                                            <sup>
                                                ({perkHotStreak.additionalInfo})
                                            </sup>
                                        }
                                    </div>
                                    <div>
                                        <span style={{marginLeft:"20px", display: "flex", alignItems: "center"}}>
                                            <span style={{color:"red"}}>⇒ &nbsp; </span>
                                            {perkHotStreak.recentPerformance}  points
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <span className="pill-stats-msg">No bro, this is totally not nerdy stuff, you're fine.</span>
                </div>
            </div>
        </div>
    )

}
