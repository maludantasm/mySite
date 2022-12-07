import './report.css'
import { saveAs } from 'file-saver'
import '../../public/files/mldm_cv.txt'

export const Report = (props) => {
    const img = props.img
    const occupation = props.occupation
    const name = props.name
    const description = props.description

    const saveFile = () => {
        saveAs(
            process.env.REACT_APP_CLIENT_URL + '../../public/files/mldm_cv.txt',
            'mldm_cv.pdf'
        );
    };

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
                        <button id='download' type='button' onClick={saveFile}>Download CV</button>
                        <button id='contact' type='button'>Entrar em contato</button>
                    </div>
                </div>
            </div>
    )
}