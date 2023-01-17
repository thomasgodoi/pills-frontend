import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";

import './LeftButton.css';

export default function LeftButton() {
    const [perks, setPerks] = useState([]);

    async function getPerk() {
        await PerkDataService.getPerks().then(response => {
            console.log('data', response.data)
            setPerks(response.data);
        })
    }

    useEffect(() => {
        getPerk();
    }, [])

    const cyanShadow = "0 0 3px rgb(0, 255, 255, 0.8)";
    const redShadow = "0 0 3px rgb(255, 0, 0, 0.8)";

    function handleTierColor(tier) {
        switch(tier) {
            case "S+":
                return "gold"

            case "S" || "A" || "B" || "C":
                return "white"

            case "D" || "E":
                return "grey"
        }
    }

    function handleTierShadow(tier) {
        const goldShadow = "0 0 3px rgb(255, 215, 0, 0.8)";
        const whiteShadow = "0 0 3px rgb(255, 255, 255, 0.8)";
        const silvershadow = "0 0 3px rgb(192, 192, 192, 0.8)";


        switch(tier) {
            case "S+":
                return goldShadow;

            case "S" || "A" || "B" || "C":
                return whiteShadow;

            case "D" || "E":
                return silvershadow;
        }
    }

    return (
        <div style={{fontSize:'12px', textAlign:'initial'}}>

            {perks.map((el, key) => 
                <div className="perk-list" key={key} style={{ color: el.isPositive ? "cyan" : "red", textShadow: el.isPositive ? cyanShadow : redShadow }}>
                    <span className="description">{el.description}</span>
                    <span className="tier" style={{color: handleTierColor(el.tier), textShadow: handleTierShadow(el.tier)}}>{el.tier}</span>
                </div>
            )}

            <button className="option1-btn">show log</button>
            <button className="option2-btn">show log</button>
        </div>
    )

}
