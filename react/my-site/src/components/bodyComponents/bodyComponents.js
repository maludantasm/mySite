import { BodyComponentStyle, BodyComponentH2 } from '../styles/bodyComponentsStyle.js';

import { Table } from './table/table';
import widtbl from './whatIDoElements/table.json';
import fortbl from './formacaoElements/table.json';

export const BodyComponent = (props) => {
    const type = props.type;
    const title = props.title;

    if (type == 'formacao') {
        return (
            <BodyComponentStyle>
                    <div className='title'>
                        <BodyComponentH2>{title}</BodyComponentH2>
                    </div>
                    <div className='content'>
                        <Table type={type} elements={fortbl} display='grid'/>
                    </div>
            </BodyComponentStyle>
        );
    }

    else if (type == 'what-i-do') {
        return (
            <BodyComponentStyle>
                    <div className='title'>
                        <BodyComponentH2>{title}</BodyComponentH2>
                    </div>
                    <div className='content'>
                        <Table type={type} elements={widtbl} display='column'/>
                    </div>
            </BodyComponentStyle>
        );
    };
};