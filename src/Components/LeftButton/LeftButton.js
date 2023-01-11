import React, { useEffect, useState } from "react";

export default function LeftButton() {
    const [leftButton, setLeftButton] = useState(null);

    const positivePerks = [
        "Earn U$300 everyday, for one year",
        "Make someone who knows you fall in love with you",
        "Become immortal for 10 days",
        "Become really good at something you have zero knowledge about",
        "Go back to when you were 15 knowing everything you know today",
        "Earn two raises at your job",
        "Earn a promotion at your job",
        "Have sex with someone (it can be anyone in the world), for one week, anytime you want",
        "Earn U$10k instantly",
        "Become friends with your idol",
        "Meet your idol",
        "Earn U$50k instantly",
        "Have your next month's credit card bill paid",
        "Win an all-inclused trip to anywhere in the world for one week",
        "Make someone instantly lose their job",
        "Eat anything you want for free for one month",
        "Three more seasons of your favorite TV series",
        "Become really good at any musical instrument",
        "Earn one year of salary without having to work",
        "You can talk with someone who already died for one day",
        "Die older than 100 years old, if you want",
        "Talk to God, or discover if there is one",
        "You can now talk with your pets",
        "Your child will earn a Nobel at 90 years old",
        "Win an small-sized house/apartment",
        "Have a 50% discount on any car you want",
        "Drug effects last longer and to less harm to your body"
    ]

    const negativePerks = [
        "You will die in a vehicle accident (crash or ran over), but you don't know when",
        "Your death will traumatize your entire family",
        "The person you love the most will die in front of you, but you don't know when",
        "You instantly lose your car/house (or the most expensive thing you have) to the government",
        "Instantly have a $10k debt",
        "Your SO will break up with you because of something bad you mistakenly did to them, but you don't know when",
        "Lose your job",
        "Can't have sex for one year",
        "Feel the worst physical pain you had again",
        "Get shot in the leg (you won't die)",
        "Have sex with the opposite gender you are attracted to. (bisexuals: Can't have sex for one year)",
        "Drown but get saved in the very last second",
        "Can't sleep for 3 days",
        "See the year you die",
        "Get convicted to 1 year of prison for a crime you did not commit",
        "Become homeless for one week (you can't sleep at someone's house)",
        "Lose one hand or one foot, you decide",
        "Have your phone stolen and thieves know how to unlock it",
        "Have your incognito search history leaked",
        "Have your high school/college degree revoked",
        "Become unemployed for 3 months",
        "The next plane you take will crash",
        "Become paraplegic for two weeks",
        "Lose one hand",
        "Become blind for one month",
        "Have a EXTREMELY painful headache right after you have sex for the rest of your life"
    ]

    const getRNG = () => {
        return Math.floor(Math.random() * (26 - 0) + 0);
    }

    const getPerks = () => {
        const selectedOptions = []

        selectedOptions.push(positivePerks[getRNG()], positivePerks[getRNG()], positivePerks[getRNG()]);
        selectedOptions.push(negativePerks[getRNG()]);
        
        return handleOptions(selectedOptions);
    }

    const handleOptions = (options) => {
        const renderedOption = []

        options.forEach((element, ind) => {
            if(ind === options.length -1) {
                return renderedOption.push(
                    <p key={ind} style={{color: 'indianred'}}>
                    - {element}
                    </p>
                )
            } else {
                return renderedOption.push(
                    <p key={ind} style={{color: 'cyan'}}>
                        + {element}
                    </p>
                )
            }
        })

        return renderedOption;
    }

    useEffect(() => {
        setLeftButton(getPerks());
    }, [])


    return (
        <div style={{fontSize:'12px', textAlign:'initial'}}>
            {leftButton !== null &&
                leftButton
            }
        </div>
    )

}
