import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from '../firebase'
import { collectionGroup, onSnapshot } from 'firebase/firestore'
import Divider from '@material-ui/core/Divider'
import { OFFERS } from '../data/dataApply'

function Card({setValues, category, setCategory, setLearnings, learnings}) {
    const [cardsKnowledge, setCardsKnowledge] = useState([
        {
        description: '',
        health: 0,
        image: '',
        knowledge: 0,
        learning: '',
        motivation: 0,
        time: 0,
        title: ''
        },
    ]); 

    const [cardsHealth, setCardsHealth] = useState([
        {
        description: '',
        health: 0,
        image: '',
        knowledge: 0,
        learning: '',
        motivation: 0,
        time: 0,
        title: ''
        },
    ]); 

    const [cardsApply] = useState(OFFERS);

    useEffect(() => {
        onSnapshot(collectionGroup(db, 'knowledge'),
        (snapshot) => {
            setCardsKnowledge(snapshot.docs.map(card => (
                {...card.data()}
            )))
        })
    }, [])

    useEffect(() => {
        onSnapshot(collectionGroup(db, 'health'),
        (snapshot) => {
            setCardsHealth(snapshot.docs.map(card => (
                {...card.data()}
            )))
        })
    }, [])

    var categoryCards;
    var card1;
    var card2;
    var card3;

    switch (category) {
        
        case 'knowledge':
            categoryCards = cardsKnowledge;
            card1 = Math.floor(Math.random()*categoryCards.length);
            card2 = Math.floor(Math.random()*categoryCards.length);
            card3 = Math.floor(Math.random()*categoryCards.length);
            break;
        case 'health':
            categoryCards = cardsHealth;
            card1 = Math.floor(Math.random()*categoryCards.length);
            card2 = Math.floor(Math.random()*categoryCards.length);
            card3 = Math.floor(Math.random()*categoryCards.length);
            break;
        case 'apply':
            categoryCards = cardsApply;
            card1 = Math.floor(Math.random()*categoryCards.length);
            card2 = Math.floor(Math.random()*categoryCards.length);
            card3 = Math.floor(Math.random()*categoryCards.length);
            break;
        default:
            break;
    }

    const onAlea = (numberCard) => {

        

        if(categoryCards === cardsKnowledge || categoryCards === cardsHealth){
            setValues(prevState => {return{
                ...prevState,
                countdown: prevState.health > 0 ? prevState.countdown - categoryCards[numberCard].time : prevState.countdown - (2*categoryCards[numberCard].time),
                knowledge: prevState.knowledge + categoryCards[numberCard].knowledge > 100 ? 100 : prevState.knowledge + categoryCards[numberCard].knowledge < 0 ? 0 : prevState.knowledge + categoryCards[numberCard].knowledge, 
                health: prevState.health + categoryCards[numberCard].health > 100 ? 100 : prevState.health + categoryCards[numberCard].health < 0 ? 0 : prevState.health + categoryCards[numberCard].health,
                motivation: prevState.motivation + categoryCards[numberCard].motivation > 100 ? 100 : prevState.motivation + categoryCards[numberCard].motivation < 0 ? 0 : prevState.motivation + categoryCards[numberCard].motivation,
            }});

            if(categoryCards === cardsKnowledge && !learnings.includes(categoryCards[numberCard].learning + ', ')){
                setLearnings(prevState =>
                [...prevState, categoryCards[numberCard].learning + ', ']
            )}

            setCategory('false');
        } else {
            var accepted = successApply(numberCard)

            if(accepted !== true){
                setValues(prevState => {return{
                    ...prevState,
                    countdown: prevState.health > 0 ? prevState.countdown - categoryCards[numberCard].time : prevState.countdown - (2*categoryCards[numberCard].time),
                    applications: prevState.applications + 1,
                    motivation: prevState.motivation - prevState.applications < 0 ? 0 : prevState.motivation - prevState.applications,
                }})

                setCategory('false');
            } else {
                setValues(prevState => {return{
                    ...prevState,
                    applications: prevState.applications + 1,
                }})
                setCategory('accepted');
            }
        }

    }

    const successApply = (numberCard) => {
        var s = 1;
        learnings.forEach((learning) => {
            if(categoryCards[numberCard].required.includes(learning.replace(', ', ''))){
                s += 1;
            }
        })
        return Math.random()*100 === s;
    }

    return (
        <>
        <Container onClick={() => onAlea(card1)}>
                <img src={categoryCards[card1].image} alt="" />
                <Description>
                    <h4 style={{textAlign: 'center', fontSize: 18}}>{categoryCards[card1].title ? categoryCards[card1].title : ''}</h4>
                    <p>{categoryCards[card1] ? categoryCards[card1].description : ''}</p>
                    {categoryCards === cardsApply ? 
                    <p><b>Compétences demandées :</b> {categoryCards[card1].required.join(", ")}</p>
                    :
                    ''
                    }
                </Description>
                <Divider />
                <Time>
                    <p>{categoryCards[card1].time} jour{categoryCards[card1].time > 1 ? 's' : ''}</p>
                </Time>
        </Container>
        <Container onClick={() => onAlea(card2)}>
                <img src={categoryCards[card2].image} alt="" />
                <Description>
                    <h4 style={{textAlign: 'center', fontSize: 18}}>{categoryCards[card2].title ? categoryCards[card2].title : ''}</h4>
                    <p>{categoryCards[card2] ? categoryCards[card2].description : ''}</p>
                    {categoryCards === cardsApply ? 
                    <p><b>Compétences demandées :</b> {categoryCards[card2].required.join(", ")}</p>
                    :
                    ''
                    }
                </Description>
                <Divider />
                <Time>
                    <p>{categoryCards[card2].time} jour{categoryCards[card2].time > 1 ? 's' : ''}</p>
                </Time>
        </Container>
        <Container onClick={() => onAlea(card3)}>
                <img src={categoryCards[card3].image} alt="" />
                <Description>
                    <h4 style={{textAlign: 'center', fontSize: 18}}>{categoryCards[card3].title ? categoryCards[card3].title : ''}</h4>
                    <p>{categoryCards[card3] ? categoryCards[card3].description : ''}</p>
                    {categoryCards === cardsApply ? 
                    <p><b>Compétences demandées :</b> {categoryCards[card3].required.join(", ")}</p>
                    :
                    ''
                    }
                </Description>
                <Divider />
                <Time>
                    <p>{categoryCards[card3].time} jour{categoryCards[card3].time > 1 ? 's' : ''}</p>
                </Time>
        </Container>
        </>
         
    )
}

export default Card

const Container = styled.div`
    background-color: rgba(15, 97, 0, 1);
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    min-height: 500px;
    display: flex;
    flex-direction: column;

    img {
        max-height: 150px;
        width: 100%;
        max-width: 300px;
        padding: 5px;
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.80) 0px 40px 58px -16px, rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9)
    }
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 20%;
`

const Time = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
`
