import styled from 'styled-components';

const FooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: rgb(138, 136, 136);
    background-color: #fcfcfc;
    border-color: #eee;

    margin: 0vh 0vh 8vh 0vh;
    padding-bottom: 1vh;
    font-size: 1.5vh;
    border-radius: 0vh 0vh 5vh 5vh;
`;

const FooterMedia = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${(props) => props.media ? '0vh 0vh 0vh 8vh' : '0vh 8vh 0vh 0vh'};
`;

const FooterMediaA = styled.a`
    margin-right: 2vh;
    text-decoration: none;
    color: rgb(138, 136, 136);
`;

export {FooterStyle, FooterMedia, FooterMediaA};