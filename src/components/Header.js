import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <MainTitle>
            <h1>Studdev : Le jeu pour trouver un stage</h1>
        </MainTitle>
    )
}

export default Header

const MainTitle = styled.nav`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 36px;
    color: rgba(237, 237, 237, 0.9);
    font-size: 22px;
`

