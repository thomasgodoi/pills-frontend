import React from "react";

export default function PickYourOptionLine() {

    const phrases = [
        "...So,",
        "WYR:",
        "Would you rather...",
        "I'm not good at starting conversations, but:",
        "So, yesterday I was at my church's cell group and they couldn't decide between:",
        "Morpheus HIMSELF said: 'Pick red, it tastes like strawberry' but idk.. WYR:",
        "I'm sorry for your little brother's death, but would you rather:",
        "Hi, it's your therapist, can you answer this question and send it to me? -Therapist",
        "Bet Jay-Z's 99 problems aren't as difficult as deciding between:",
        "Choose your destiny, literally... ",
        "You chose red because you don't wanna see your mother die, I chose red because I like the strawberry flavour. We are not the same."
    ]

    const getRNG = () => {
        return Math.floor(Math.random() * (11 - 0) + 0);
    }

    return (
        <p style={{width:'600px'}}>
            {phrases[getRNG()]}
        </p>
    )
}