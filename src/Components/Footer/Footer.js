import React from "react";
import "../Styles/Footer.css";

import GitHub from "../../../src/Icons/Homepage/icon-github.svg";

export default function Footer() {
    return (
        <div className="footer-div">
            <div className="footer-btns">
                <div>
                    <button title="My GitHub" onClick={() => window.open("https://github.com/thomasgodoi", '_blank').focus()} style={{display:"flex", alignItems: "center"}}>
                        <img src={GitHub} width="20px" height="20px" alt="My GitHub" />
                        <span>/thomasgodoi</span>
                    </button>
                </div>
            </div>
        </div>
    )
}