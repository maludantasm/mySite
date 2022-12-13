import styled from 'styled-components'

const HeaderStyle = styled.div`display: flex;
flex-direction: row;
justify-content: space-between;
padding: 3vh 0vh 0vh 5vh;`;

const HeaderMenuStart= styled.a`display: flex;
flex-direction: row;
align-items: center;
display: flex;
flex-direction: row;`;

const HeaderLetter = styled.p`color: white;
background-color: #318CE7;
border-radius: 50%;
margin-right: 1.5vh;
height: 4.8vh;
width: 4.8vh;

line-height: 4.8vh;
font-size: 2vh;

text-align: center;`;

const HeaderName = styled.p`font-size: 2vh;`;

const HeaderMenuEnd = styled.nav`padding-right: 5vh;`;

const HeaderUl= styled.ul`display: flex;
flex-direction: row;`;

export {HeaderStyle, HeaderMenuStart, HeaderLetter, HeaderName, HeaderMenuEnd, HeaderUl};