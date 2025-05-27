import tags from './tags.json';
import styled from 'styled-components';

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 24px 0;
    align-items: center;
`

const TagsEstilizadas = styled.button`
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    height: 40px;

`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
`

const Tags = () => {
    return (
        <>
            <TagsContainer>
                <TagTitulo>Busque por tags:</TagTitulo>
                {tags.map(tag => <TagsEstilizadas key={tag.id}>{tag.titulo}</TagsEstilizadas>)}
            </TagsContainer>
        </>
    )
}

export default Tags;