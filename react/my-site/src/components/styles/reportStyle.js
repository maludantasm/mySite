import styled from 'styled-components';
import { primaryColor } from '../UI/variables';

const ReportStyle = styled.div`
    display: flex;
    flex-direction: row;

    margin: 15vh 5vh 0vh 25vh;
`;

const ReportPFP = styled.img`
    border: solid;
    border-width: 1.8vh;
    border-color: white;
    border-radius: 50%;
    box-shadow: 0.2vh 0.2vh 1.5vh 0.5vh rgba(59, 58, 58, 0.2);


    min-height: 20vh;
    min-width: 20vh;

    height: 35vh;
    width: 35vh;

    max-height: 80vh;
    max-width: 80vh;

    object-fit: cover;
`;

const ReportDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    color: #333;
    margin-left: 5vh;
    margin-right: 10vh;
`;

const ReportButton = styled.button`
    font-family: Poppins;
    font-size: 1.6vh;

    border: none;
    border-radius: 2.6vh;

    background: ${(props) => props.primary ? '#318CE7' : primaryColor};
    color: ${(props) => props.primary ? primaryColor : '#333'};

    box-shadow: 0.1vh 0.1vh 1vh 0.2vh rgba(59, 58, 58, 0.2);

    cursor: pointer;
    height: 5vh;
    padding: 0.3vh 2.5vh;
    position: relative;
    margin-right: 1.7vh;

    &:hover {
        transition: transform 250ms;
        transition:.6s ease; 
    }
`;

const Block = styled.div`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export {ReportStyle, ReportPFP, ReportDesc, ReportButton, Block};