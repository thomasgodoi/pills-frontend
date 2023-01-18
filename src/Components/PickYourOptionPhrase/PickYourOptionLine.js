import React from "react";

export default function PickYourOptionLine() {

    const phrases = [
        "...So,",
        "WYR:",
        "Would you rather...",
        "I'm not good at starting conversations, but",
        "Yesterday I was at my church's cell group and this question was so good it left them speechless.",
        "Morpheus HIMSELF said: 'Pick red, it tastes like strawberry' but I don't know...",
        "I'm sorry for your little brother's death, but hear me out",
        "Hey it's me, your therapist. Can you answer this question and send it to me? -Therapist",
        "Bet Jay-Z's 99 problems aren't as difficult as this",
        "Choose your destiny, literally. ",
        "You chose blue pill because you don't wanna see your mother die, I chose blue because I like blueberry flavour. We are not the same."
    ]

    // const phrases = [
    //     "Header 1",
    //     "Header 2",
    //     "Header 3",
    //     "Header 4",
    //     "Header 5",
    //     "Header 6",
    //     "Header 7",
    //     "Header 8",
    //     "Header 9",
    //     "Header 10"
    // ]

    const getRNG = () => {
        return Math.floor(Math.random() * (11 - 1) + 1);
    }

    return (
        <p style={{width:'600px'}}>
            {phrases[getRNG()]}
        </p>
    )
}