import { ElementStyle, ElementTitle, ElementSvg, ElementP } from '../../styles/bodyElementsStyle.js';

export const WhatIDoElement = (props) => {
    return (
        <ElementStyle>
            <ElementTitle>
                <ElementSvg xmlns='http://www.w3.org/2000/svg' width='3vh' height='3vh' fill='currentColor' viewBox='0 0 16 16'>
                    <path d={props.path}/>
                </ElementSvg>
                <h3>{props.title}</h3>
            </ElementTitle>    
                <ElementP>{props.text}</ElementP>
        </ElementStyle>
    );
};