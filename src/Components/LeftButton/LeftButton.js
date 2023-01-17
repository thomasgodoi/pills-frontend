import React, { useEffect, useState } from "react";
import { PerkDataService } from "../../Services/PerkDataService";

import './LeftButton.css';

export default function LeftButton() {
    // const [leftButton, setLeftButton] = useState(null);
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

    return (
        <div style={{fontSize:'12px', textAlign:'initial'}}>

            {perks.map((el, key) => 
                <div className="perk-list" key={key} style={{color: el.isPositive ? "cyan" : "indianred"}}>
                    <span className="description">{el.description}</span>
                    <span className="tier">{el.tier}</span>
                </div>
            )}

            <button>show log</button>
        </div>
    )

}
