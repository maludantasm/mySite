import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
font-family: 'Poppins';
background-color: #318CE7;
color: #333;`;

const AppStyle = styled.div`
background-color: white;
border-radius: 5vh;
margin: 8vh 15vh 0vh 15vh;`;

const AppBodyContainer = styled.p`
display: flex;
flex-direction: column;

border-bottom: 0.2vh solid #f2f2f2;

margin: 0vh 0vh 0vh 0vh;
padding-bottom: 50vh;`;

export {GlobalStyle, AppStyle, AppBodyContainer};