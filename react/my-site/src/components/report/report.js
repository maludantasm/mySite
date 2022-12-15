import { ReportStyle, ReportPFP, ReportDesc, ReportDescText, ReportName, ReportButton } from '../styles/reportStyle.js';

import SaveFile from './saveFile/savefile.js';
import './mldm_cv.pdf';

export const Report = (props) => {
    const img = props.img;
    const occupation = props.occupation;
    const name = props.name;
    const description = props.description;

    return (
            <ReportStyle>
                <div className='picture'>
                    <ReportPFP src={img} alt='profile-pic'/>
                </div>
                <ReportDesc>
                    <ReportDescText occupation>
                        <p>{occupation}</p>
                    </ReportDescText>
                    <ReportName>
                        <p><b>{name}</b></p>
                    </ReportName>
                    <ReportDescText text>
                        <p>{description}</p>
                    </ReportDescText>
                    <div className='buttons'>
                        <ReportButton primary type='button' onClick={SaveFile}>Download CV</ReportButton>
                        <ReportButton type='button'>Entrar em contato</ReportButton>
                    </div>
                </ReportDesc>
            </ReportStyle>
    );
};