import './report.css'
import SaveFile from './saveFile/savefile.js'
import './mldm_cv.pdf'

export const Report = (props) => {
    const img = props.img
    const occupation = props.occupation
    const name = props.name
    const description = props.description

    return (<div className='report'>
                <div className='picture'>
                    <img id='profile-pic' src={img} alt='profile-pic'/>
                </div>
                <div className='description'>
                    <div className='occupation'>
                        <p>{occupation}</p>
                    </div>
                    <div className='name'>
                        <p><b>{name}</b></p>
                    </div>
                    <div className='text'>
                        <p>{description}</p>
                    </div>
                    <div className='buttons'>
                        <button id='download' type='button' onClick={SaveFile}>Download CV</button>
                        <button id='contact' type='button'>Entrar em contato</button>
                    </div>
                </div>
            </div>
    )
}