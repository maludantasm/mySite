import './formacao-elements.css'

export const FormacaoElement = (props) => {
    return (
        <div className='element'>
            <div className='element-title'>
                <h3>{props.title}</h3>
            </div>    
                <p>{props.text}</p>
        </div>
    );
}