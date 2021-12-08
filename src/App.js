import { useState } from 'react';
import styled from 'styled-components'
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import Status from './components/Status';
import EndGame from './components/EndGame';
import Footer from './components/Footer';
import Rules from './components/Rules';

function App() {

  const [rulesNumber, setRulesNumber] = useState(6);

  const [values, setValues] = useState({
    countdown: 200,
    knowledge: 0,
    health: 70,
    motivation: 100,
    applications: 0,
  });

  return (
    <Container>
      <Header />
      <Status values={values} setValues={setValues} />
      { rulesNumber > 0 ?
      <Rules rulesNumber={rulesNumber} setRulesNumber={setRulesNumber} />
      :
      values.countdown > 0 && values.motivation > 0 ? 
      <Game values={values} setValues={setValues} /> :
      <EndGame values={values}/> 
      }
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #070D4F;
  min-height: 100vh;
  min-width: 100vw;
`