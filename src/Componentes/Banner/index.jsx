import styled from "styled-components"

const BannerEstilizado = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 18px;
    max-width: 97%;
    background-size: cover;

`
const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;

`



const Banner = ({texto, backgroundImage}) => {
    return (
        <BannerEstilizado $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </BannerEstilizado>
    )
}

export default Banner;