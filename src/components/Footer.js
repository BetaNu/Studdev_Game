import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            © Benjamin Dubourguier, 2021
        </Container>
    )
}

export default Footer

const Container = styled.div`
    color: rgba(237, 237, 237, 0.9);
    height: 5vh;
    font-size: 10px;
    text-align: center;
`