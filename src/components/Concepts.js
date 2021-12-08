import React from 'react'
import styled from 'styled-components'

function Concepts({learnings, values}) {
    return (
        <Container>
        <div>
            Nombres de candidatures : {values.applications}
        </div>
        <Learnings>
            Concepts appris :
            {' '}{learnings.sort()}
        </Learnings>
        </Container>
    )
}

export default Concepts

const Container = styled.div`
    width: 100vw;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: rgba(237, 237, 237, 0.9);
`
const Learnings = styled.div`
    max-width: 65vw;
`
