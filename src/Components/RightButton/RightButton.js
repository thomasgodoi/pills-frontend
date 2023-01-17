import React, { useEffect, useState } from "react";

export default function RightButton() {
    const [rightButton, setRightButton] = useState(null);

    useEffect(() => {
        const positivePerks = [ "Earn U$300 everyday, for one year" ]
        const negativePerks = [ "You will die in a vehicle accident (crash or ran over), but you don't know when" ]
        const getRNG = () => { return Math.floor(Math.random() * (25 - 1) + 1) }
    

        
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

        setRightButton(getPerks());
    }, [])


    return (
        <div style={{fontSize:'12px', textAlign:'initial'}}>
            {rightButton !== null &&
                rightButton
            }
        </div>
    )

}
