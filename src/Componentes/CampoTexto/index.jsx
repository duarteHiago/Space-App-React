import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    width: 100%; // Garante que o container acompanha o input
    max-width: 566px; // Limite opcional
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 48px 12px 16px; // Espaço extra à direita para o ícone
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconeLupa = styled.img`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    pointer-events: none; // Ícone não interfere no clique do input
`;

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado type="text" placeholder="O que voce procura?" />
            <IconeLupa src={search} alt="Lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto
