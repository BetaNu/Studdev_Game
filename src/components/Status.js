import React from 'react'
import styled from 'styled-components'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

function Status({values, setValues}) {

    return (
        <Container>
            <Countdown id="countdown">{values.countdown}</Countdown>
            <ProgressBar>
                <Progress
                    style= {{marginTop: 10}}
                    percent= {values.knowledge}
                    status='brain'
                    theme = {{
                        brain: {
                            symbol: '🧠',
                            trailColor: '#CFC7EB',
                            color: '#6E57C4'
                        },
                        default: {
                            symbol: '🧠',
                            trailColor: '#CFC7EB',
                            color: '#5A40B6'
                        }
                    }}
                />
                <Progress
                    style= {{marginTop: 10}}
                    percent= {values.health}
                    status='health'
                    theme = {{
                      health: {
                          symbol: '❤️',
                          trailColor: '#F5ACAC',
                          color: '#CE1818'
                      },
                      default: {
                          symbol: '❤️',
                          trailColor: '#F5ACAC',
                          color: '#CE1818'
                      }
                    }}
                />
                <Progress
                    style= {{marginTop: 10, marginBottom: 10}}
                    percent= {values.motivation}
                    status='motivation'
                    theme = {{
                        motivation: {
                            symbol: '💪',
                            trailColor: '#F9F1C5',
                            color: '#DEC017'
                        },
                        default: {
                            symbol: '💪',
                            trailColor: '#F9F1C5',
                            color: '#DEC017'
                        }
                    }}
                />
            </ProgressBar>
        </Container>
    )
}

export default Status

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const Countdown = styled.div`
    display: flex;
    padding: 0 10vw;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    color: rgba(237, 237, 237, 0.9);
`

const ProgressBar = styled.div`
    width: 75vw;
    max-width: 850px;
`

