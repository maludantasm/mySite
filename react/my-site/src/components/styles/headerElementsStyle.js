import styled from 'styled-components';

const HeaderElementLi = styled.li`
padding-right: 2.5vh;
list-style: none;`;

const HeaderMenuEndA = styled.a`
text-decoration: none;
color: dimgray;
display: flex;
align-items: center;
transition: transform 250ms;`;

const HeaderAHover = styled.hover`
opacity: 70%;`;

const HeaderMenuSvgHover = styled.hover`
transform: translateY(0.2vh);`;

const HeaderSvg = styled.svg`
padding-left: 0.5vh;
transition: transform 250ms;`;

export {HeaderElementLi, HeaderMenuEndA, HeaderAHover, HeaderMenuSvgHover, HeaderSvg};