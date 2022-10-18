import Django from "../../../../assets/techs/Django.svg"
import Node from "../../../../assets/techs/Node.svg"
import PostgreSQL from "../../../../assets/techs/PostgreSQL.svg"
import Python from "../../../../assets/techs/Python.svg"
import React from "../../../../assets/techs/React.svg"
import TypeORM from "../../../../assets/techs/TypeORM.svg"
import Typescript from "../../../../assets/techs/Typescript.svg"

import Docker from "../../../../assets/techs/Docker.svg"
import JavaScript from "../../../../assets/techs/JavaScript.svg"
import Jest from "../../../../assets/techs/Jest.svg"
import MongoDB from "../../../../assets/techs/MongoDB.svg"
import { TechRollWrapper } from '../style'





const BackEndList = () =>  {

    const first_roll = [
        {
            img: Django, 
            name: "Django"
        }, {
            img: Python, 
            name: "Python"
        }, {
            img: Docker, 
            name: "Docker"
        }
    ]

    const second_roll = [
        {
            img: MongoDB,
            name: "MongoDB"
        }, {
            img: PostgreSQL, 
            name: "PostgreSQL"
        }
    ]
    
    const third_roll = [
        {
            img: Node, 
            name: "Node"
        }, {
            img: TypeORM, 
            name: "TypeORM"
        } 
    ]
    const fourth_roll = [
        {
            img: JavaScript, 
            name: "JavaScript"
        }, {
            img: Typescript, 
            name: "Typescript"
        },  {
            img: Jest, 
            name: "Jest"
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
        </>
        
    )
}

export default BackEndList