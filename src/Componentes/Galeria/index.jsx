import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import styled from "styled-components";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
    max-width: 900px;
`;

const ImagensContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 0;
    margin: 0;
    max-width: 100%;
    list-style: none;
`;

const Galeria = ({fotos = []}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => (
                            <li key={foto.id}>
                                <Imagem foto={foto} />
                            </li>
                        ))}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;