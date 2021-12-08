import React, { useState } from 'react'
import styled from 'styled-components'
import { RULES } from '../data/dataRules';

function Rules({rulesNumber, setRulesNumber}) {
    const [descriptionRules] = useState(RULES);

    console.log(rulesNumber);

    return (
        <Container>
        <Rule>
            <p>{descriptionRules[rulesNumber].description1}</p>
            <br />
            <img src={descriptionRules[rulesNumber].image} alt=''/>
            <br />
            <p>{descriptionRules[rulesNumber].description2}</p>
        </Rule>
        <Button onClick={() => setRulesNumber(prevState => prevState -1)}>{descriptionRules[rulesNumber].txtBtn}</Button>
        </Container>
    )
}

export default Rules

const Container = styled.div`
    color: rgba(237, 237, 237, 0.9);
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    img{
        width: 80%;
    }

`

const Rule = styled.div`
    margin: 10px; 
`

const Button = styled.button`
    background-color: rgba(15, 97, 0, 1);
    color: rgba(237, 237, 237, 0.9);
    font-weight: bold;
    height: 40px;
    width: 100px;
    border-radius: 6px;
    shadow-box: none;
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.6);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9)
    }
`
