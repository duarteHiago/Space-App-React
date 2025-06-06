import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"

const Overlay= styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`

const DialogEstilizada = styled.dialog`
    position: fixed;
    background: transparent;
    top: 18%;
    padding: 0;
    border: 0;
    width: 800px;
    height: 300px;
    display: flex;
    justify-content: center;
    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
        }
    }

`

const ModalZoom= ({ foto, aoFechar }) =>{
    return (
        <>
            {foto && <>
                <Overlay>
                    <DialogEstilizada open={!!foto} onClose={aoFechar}>
                        <Imagem foto={foto} expandida={true} />
                        <form method="dialog" onSubmit={aoFechar}>
                            <BotaoIcone>
                                <img src="/icones/fechar.png" alt="Icone de fechar" />
                            </BotaoIcone>
                        </form>
                    </DialogEstilizada>
                </Overlay>
            </>}
        </>
    )

}

export default ModalZoom