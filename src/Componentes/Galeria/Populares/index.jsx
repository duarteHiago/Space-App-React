import Titulo from "../../Titulo";
import styled from "styled-components"; 

const PopularesEstilizado = styled.div`
   margin-right: 10px;
`

const Populares = () => {
    return (
        <Titulo $alinhamento="center">Populares</Titulo>
    );

}

export default Populares;