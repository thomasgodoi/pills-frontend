import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";

import '../Styles/Pills.css';

export default function LeftButton() {
    const [perks, setPerks] = useState([]);
    const cyan = "rgb(0, 255, 255)";
    const cyanShadow = "0 0 3px rgb(0, 255, 255, 0.6)";
    const red = "rgb(255, 0, 0)";
    const redShadow = "0 0 3px rgb(255, 0, 0, 0.6)";

    useEffect(() => {
        getPerk();
    }, [])

    async function getPerk() {
        await PerkDataService.getPerks().then(response => {
            setPerks(response.data);
        })
    }

    return (
        <div style={{fontSize:'12px', textAlign:'initial'}}>

            {perks.map((el, key) => 
                <div className="perk-list" key={key} style={{ color: el.isPositive ? cyan : red, textShadow: el.isPositive ? cyanShadow : redShadow }}>
                    <span className="description">{el.description}</span>
                    <span className="tier" style={{color: PerkDataService.handleTierColor(el.tier), textShadow: PerkDataService.handleTierShadow(el.tier)}}>{el.tier}</span>
                </div>
            )}

            <button className="option1-btn"><span>show log</span></button>
        </div>
    )

}
