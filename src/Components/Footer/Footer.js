import React from "react";

import GitHub from "../../../src/Icons/Homepage/icon-github.svg";

export default function Footer() {
    return (
        <div style={{ height: "30px", background: "rgb(40, 40, 40)", display: "flex", justifyContent: "center", position: "fixed", bottom: "0", width: "100%", alignItems: "end" }}>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "200px"}}>
                <button title="My GitHub" onClick={() => window.open("https://github.com/thomasgodoi", '_blank').focus()} style={{background: "transparent", border: "none"}}>
                    <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}} />
                </button>

                <button title="My GitHub" onClick={() => window.open("https://github.com/thomasgodoi", '_blank').focus()} style={{background: "transparent", border: "none"}}>
                    <img src={GitHub} width="20px" height="20px" alt="My GitHub" style={{cursor:"pointer"}} />
                </button>
            </div>
        </div>
    )
}