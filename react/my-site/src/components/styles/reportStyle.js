import styled from 'styled-components'

const ReportStyle = styled.div`display: flex;
flex-direction: row;

margin: 15vh 5vh 0vh 25vh;`;

const ReportPFP = styled.img`    border: solid;
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

object-fit: cover;`;

const ReportDesc = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
color: #333;
margin-left: 5vh;
margin-right: 10vh;`

const ReportOccup = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;
color: #333;
margin-left: 5vh;
margin-right: 10vh;`

export {ReportStyle, ReportPFP, ReportDesc};