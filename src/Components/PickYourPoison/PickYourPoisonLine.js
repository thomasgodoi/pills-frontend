import React, { useEffect, useState } from "react";

import "../Styles/PickYourPoisonLine.css"

export default function PickYourPoisonLine() {
    const [phrase, setPhrase] = useState("");

    useEffect(() => {

        const phrases = [
            "...So?",
            "I know, I'm not good at starting conversations.",
            "My church's cell group just couldn't answer this question.",
            "Rumours says that Morpheus convinced Neo to take the red pill because 'it tastes like strawberry' but I don't know...",
            "I'm sorry for your little brother's death, but I really need you to answer this.",
            "Hey it's me, your therapist. Can you answer this question and send it to me? -Totally your therapist.",
            "Bet Jay-Z's 99 problems aren't as difficult as this.",
            "Choose your destiny, uh, literally. ",
            "You chose blue pill because you don't wanna see your mother die, I chose blue pill because I like blueberry flavour. We are not the same."
        ]

        const getRNG = () => {
            const randomNumber = Math.floor(Math.random() * (9 - 1) + 1);
            return setPhrase(phrases[randomNumber]);
        }

        getRNG();
    }, [])


    return (
        <div className="pypl-div">
            <p style={{width:'600px', display: "flex", justifyContent: "center", alignItems: "baseline", fontSize: "12px", marginTop: "50px", height:"50px"}}>
                {phrase}
            </p>
        </div>
    )
}   