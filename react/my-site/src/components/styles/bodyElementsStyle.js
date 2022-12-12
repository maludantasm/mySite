import styled from 'styled-components'

const ElementStyle = styled.div`display: flex;
flex-direction: column;

margin-right: 15vh;
margin-left: 3vh;

padding-bottom: 4vh;`;

const ElementTitle = styled.div`display: flex;
flex-direction: row;

align-items: center;`;

const ElementSvg = styled.svg`color: #318CE7;
margin-right: 2.1vh;`;

const ElementP = styled.p`font-size: 1.5vh;`;

export {ElementStyle, ElementTitle, ElementSvg, ElementP};