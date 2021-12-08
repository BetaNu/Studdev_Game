import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Concepts from './Concepts'
import EndGame from './EndGame'


function Game({values, setValues}) {

    const [category, setCategory] = useState('false')
    const [learnings, setLearnings] = useState([])

    return (
        <Container>
            {category !== 'false' ?
            <Retour onClick={() => setCategory('false')}>&lsaquo; Retour</Retour>
            :
            ''
            }
            {category === 'false' ? 
                <Grid>
                    <CategoryCard onClick={() => setCategory('knowledge')}>
                        <img src="https://img.icons8.com/ios/500/000000/teaching.png" alt="" />
                        <p>Apprendre</p>
                    </CategoryCard> 
                    <CategoryCard onClick={() => setCategory('health')}>
                        <img src="https://img.icons8.com/ios/500/000000/meditation-guru.png" alt=""/>
                        <p>Prendre soin de soi</p>
                    </CategoryCard>
                    {values.knowledge < 30 ?
                        <CategoryCardDisabled>
                            <img src="https://img.icons8.com/ios-filled/500/000000/set-as-resume.png" alt=""/>
                            <p>Postuler</p>
                        </CategoryCardDisabled>
                    :
                        <CategoryCard onClick={() => {values.knowledge >= 30 ? setCategory('apply') : alert('Vous n\'avez pas encore assez de connaissances pour postuler')}} >
                            <img src="https://img.icons8.com/ios-filled/500/000000/set-as-resume.png" alt=""/>
                            <p>Postuler</p>
                        </CategoryCard>
                    }
                </Grid>
                : category === 'accepted' ?
                <EndGame category={category} values={values} />
                :
                <Grid>
                <Card setValues={setValues} category={category} setCategory={setCategory} learnings={learnings} setLearnings={setLearnings} />
                </Grid>
            }
        <Concepts learnings={learnings} values={values} />
        </Container>

    )
}

export default Game

const Container = styled.div`
    padding: 20px 20px;
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`

const Retour = styled.div`
    cursor: pointer;
    color: rgba(249, 249, 249, 0.9);
    align-self: flex-start;
`

const Grid = styled.div`
    margin: 15px 0;
    display: grid;
    padding: 0 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 20px;
    max-width: 1100px;
`

const CategoryCard = styled.div`
    background-color: rgba(15, 97, 0, 1);
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    min-height: 50vh;


    img {
        heigth: 100%;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
        padding: 5px;
        border-radius: 10px;
    }

    p {
        font-size: 20px;
        padding: 5px;
        text-align: center;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.80) 0px 40px 58px -16px, rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.9)
    }
`

const CategoryCardDisabled = styled.div`
    background-color: rgba(15, 97, 0, 0.5);
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    min-height: 50vh;


    img {
        heigth: 100%;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
        padding: 5px;
        border-radius: 10px;
    }

    p {
        font-size: 20px;
        padding: 5px;
        text-align: center;
    }
`
