import Css from "../../../../assets/techs/Css.svg"
import Django from "../../../../assets/techs/Django.svg"
import Docker from "../../../../assets/techs/Docker.svg"
import HTML from "../../../../assets/techs/HTML.svg"
import JavaScript from "../../../../assets/techs/JavaScript.svg"
import Jest from "../../../../assets/techs/Jest.svg"
import MongoDB from "../../../../assets/techs/MongoDB.svg"
import Node from "../../../../assets/techs/Node.svg"
import PostgreSQL from "../../../../assets/techs/PostgreSQL.svg"
import Python from "../../../../assets/techs/Python.svg"
import React from "../../../../assets/techs/React.svg"
import Redux from "../../../../assets/techs/Redux.svg"
import TypeORM from "../../../../assets/techs/TypeORM.svg"
import Typescript from "../../../../assets/techs/Typescript.svg"
import { TechRollWrapper } from '../style'



const AllTechList = () =>  {

    const first_roll = [
        {
            img: Django, 
            name: "Django"
        }, {
            img: Python, 
            name: "Python"
        }, {
            img: MongoDB,
            name: "MongoDB"
        },
    ]

    const second_roll = [
        {
            img: Node, 
            name: "NodeJS"
        }, {
            img: PostgreSQL, 
            name: "PostgreSQL"
        }, {
            img: TypeORM, 
            name: "TypeORM"
        }
    ]

    const third_roll = [
        {
            img: JavaScript, 
            name: "JavaScript"
        }, {
            img: Typescript, 
            name: "Typescript"
        }
    ]
    const fourth_roll = [
        {
            img: React, 
            name: "React"
        }, {
            img: Redux, 
            name: "Redux"
        }
    ]

    const fifth_roll = [
        {
            img: HTML, 
            name: "HTML"
        }, {
            img: Css, 
            name: "Css"
        }
    ]

    const six_roll = [
        {
            img: Docker, 
            name: "Docker"
        }, {
            img: Jest, 
            name: "Jest"
        },
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

        <TechRollWrapper>
            {
                third_roll.map((pick, index) => (
                            <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>

        <TechRollWrapper>
            {
                fourth_roll.map((pick, index) => (
                            <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>
        <TechRollWrapper>
            {
                fifth_roll.map((pick, index) => (
                            <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>
        <TechRollWrapper>
            {
                six_roll.map((pick, index) => (
                            <img src={pick.img} alt={pick.name} key={index}/>
                ))

            }
        </TechRollWrapper>
        </>
    )
}

export default AllTechList