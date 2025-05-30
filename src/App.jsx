import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import Galeria from "./Componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./Componentes/ModalZoom"


const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833  4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;

`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;

`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner texto="Banner do Alura Space" backgroundImage="/src/assets/banner.png" />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} />
    </FundoGradiente>
  )
}

export default App
