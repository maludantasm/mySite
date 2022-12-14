import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins';
        background-color: #318CE7;
        color: #318CE7;
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #318CE7;
    z-index: 1;
`;

const Loader = styled.div`
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #ffffff transparent #ffffff transparent;
    border-radius: 50%;
    animation: ${spin} 1.2s linear infinite;
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AppStyle = styled.div`
    background-color: white;
    border-radius: 5vh;
    margin: 8vh 15vh 0vh 15vh;

    animation: ${pulse} 750ms;
`;

// const LPAnimation = styled(AppStyle)`
//   animation: ${pulse} 750ms;
// `;

const AppBodyContainer = styled.p`
    display: flex;
    flex-direction: column;

    border-bottom: 0.2vh solid #f2f2f2;

    margin: 0vh 0vh 0vh 0vh;
    padding-bottom: 50vh;
`;

export {GlobalStyle, LoaderContainer, Loader, AppStyle, AppBodyContainer};