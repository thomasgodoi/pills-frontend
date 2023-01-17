import React from "react";

import GitHub from "../../../src/Icons/Homepage/icon-github.svg";

export default function Footer() {
    return (
        <footer style={{ height:"30px", background: "#3a3f4a", display:"flex", justifyContent:"center", position:'fixed', bottom:'0', width:'100%' }}>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "200px"}}>
                <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}}/>
                <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}}/>
            </div>
        </footer>
    )
}