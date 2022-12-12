import { WIDEStyle, WIDETitle, WIDESvg, WIDEP } from '../../../styled-components/whatIDo-elementsStyle.js';

export const WhatIDoElement = (props) => {
    return (
        <WIDEStyle>
            <div className='element-title'>
                <WIDESvg xmlns='http://www.w3.org/2000/svg' width='3vh' height='3vh' fill='currentColor' viewBox='0 0 16 16'>
                    <path d={props.path}/>
                </WIDESvg>
                <h3>{props.title}</h3>
            </div>    
                <WIDEP>{props.text}</WIDEP>
        </WIDEStyle>
    );
}