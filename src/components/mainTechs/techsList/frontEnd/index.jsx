import JavaScript from "../../../../assets/techs/JavaScript.svg"
import React from "../../../../assets/techs/React.svg"
import Typescript from "../../../../assets/techs/Typescript.svg"

import Redux from "../../../../assets/techs/Redux.svg"

import Css from "../../../../assets/techs/Css.svg"
import HTML from "../../../../assets/techs/HTML.svg"
import { TechRollWrapper } from '../style'



const FrontEndList = () =>  {

    const first_roll = [
        {
            img: JavaScript, 
            name: "JavaScript"
        }, {
            img: Typescript, 
            name: "Typescript"
        },{
            img: React, 
            name: "React"
        }
    ]

    const second_roll = [
    {
        img: Redux, 
        name: "Redux"
    }, {
        img: HTML, 
        name: "HTML"
    }, {
        img: Css, 
        name: "Css"
    }
    ]

    
    return (
        <>
        <TechRollWrapper>
            {
                first_roll.map((pick, index) => (
                    <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>

        <TechRollWrapper>
            {
                second_roll.map((pick, index) => (
                    <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>
        </>
    )
}

export default FrontEndList