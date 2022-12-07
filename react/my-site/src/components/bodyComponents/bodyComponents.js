import { Table } from './table/table';
import widtbl from './whatIDoElements/table.json'
import fortbl from './formacaoElements/table.json'
import './bodyComponents.css'

export const BodyComponent = (props) => {
    const type = props.type
    const title = props.title

    if (type == 'formacao') {
        return (
            <div className='body-component'>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='content'>
                    <Table type={type} elements={fortbl} display='grid'/>
                </div>
            </div>
        );
    }

    else if (type == 'what-i-do') {
        return (
            <div className='body-component'>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='content'>
                    <Table type={type} elements={widtbl} display='column'/>
                </div>
            </div>
        );
    }
}