import { ElementStyle, ElementTitle, ElementSvg, ElementP } from '../../styles/bodyElementsStyle.js';

export const FormacaoElement = (props) => {
    return (
        <ElementStyle>
            <ElementTitle>
                <h3>{props.title}</h3>
            </ElementTitle>    
                <ElementP>{props.text}</ElementP>
        </ElementStyle>
    );
};