import React from 'react'
import styled from 'styled-components'

function EndGame({category, values}) {
    return (
        <Container>
        {category === 'accepted' ?
            <Win>
                <h2>Bravo !!!</h2>
                <p>Grâce à vos efforts et votre persévérance, vous avez enfin réussi à décrocher un stage après {values.applications} candidature{values.applications > 1 ? 's' : ''} ! </p>
                <p>Moi malheureusement, malgré mes efforts, je n'ai toujours pas trouvé... Mais il me reste encore un peu plus d'un mois pour obtenir un stage, je garde espoir ! Si le jeu vous a plus, vous pouvez toujours regarder mon CV et me contacter afin de m'aider à gagner le jeu de ma vie professionnelle :</p>
                <a href="https://drive.google.com/file/d/1gHShW1krzkQo1iE_Ew3vMcfvocKd-bXF/view?usp=sharing" rel="noreferrer" target="_blank"> <Button>Voir le CV</Button></a>
                <p>Si vous voulez rejouer (même si, sans vous mentir, il faudrait être très chanceux pour gagner deux fois), il suffit de rafraichir votre page ou utiliser le bouton ci-dessous :</p>
                <Button onClick={() => window.location.reload()}>Rejouer</Button>
            </Win>
        :
            <Lose>
                <h2>Dommage ...</h2>
                { values.countdown <= 0 ?
                    <>
                    <p>Malheureusement, vous n'avez pas réussi à trouver un stage avant la fin du temps imparti.</p>
                    <p>Il me reste pour ma part un peu plus d'un mois afin de trouver mon stage. Si le jeu vous a plus, vous pouvez toujours regarder mon CV et me contacter si mon profil vous intéresse :</p>
                    <a href="https://drive.google.com/file/d/1gHShW1krzkQo1iE_Ew3vMcfvocKd-bXF/view?usp=sharing" rel="noreferrer" target="_blank"> <Button>Voir le CV</Button></a>
                    <p>Pour réessayer (même si, sans vous mentir, c'est très compliqué de trouver un stage), il suffit de rafraichir votre page ou utiliser le bouton ci-dessous :</p>
                    <Button onClick={() => window.location.reload()}>Rejouer</Button>
                    </>
                :
                    <>
                    <p>A force de travailler et de ne pas recevoir de réponses de vos candidatures, vous avez perdu toute votre motivation. Vous décidez donc de partir faire du fromage à base de lait d'ornithorynque. Peut-être que vous aurez plus de chance.</p>
                    <p>Pour ma part, malgré plusieurs déconvenues, il me reste encore beaucoup de motivation ! J'ai encore espoir de trouver un stage et de travailler en tant que concepteur d'applications. Si le jeu vous a plus, vous pouvez toujours regarder mon CV et me contacter si mon profil vous intéresse :</p>
                    <a href="https://drive.google.com/file/d/1gHShW1krzkQo1iE_Ew3vMcfvocKd-bXF/view?usp=sharing" rel="noreferrer" target="_blank"> <Button>Voir le CV</Button></a>
                    <p>Pour réessayer (même si, sans vous mentir, c'est très compliqué de trouver un stage), il suffit de rafraichir votre page ou utiliser le bouton ci-dessous :</p>
                    <Button onClick={() => window.location.reload()}>Rejouer</Button>
                    </>
                }
            </Lose>
    }
    </Container>
    )
}

export default EndGame

const Container = styled.div`
    color: rgba(237, 237, 237, 0.9);
    min-height: 76vh;
`

const Win = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

const Lose = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
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