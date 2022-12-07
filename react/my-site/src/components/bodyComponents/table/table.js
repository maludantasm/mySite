import './table.css'
import WhatIDoElement from '../whatIDoElements'
import FormacaoElement from '../formacaoElements'

export const Table = (props) => {
	const display = props.display 
	const type = props.type

	if (type == 'formacao') {
		var result = props.elements.map((element) => {
			return(<FormacaoElement key={element.id} title={element.title} text={element.text}/>)
		});
	}

	else if (type == 'what-i-do') {
		var result = props.elements.map((element) => {
			return(<WhatIDoElement key={element.id} path={element.path} title={element.title} text={element.text}/>)
		});
	}

	return (
		<div className={display}>
			{result}
		</div>
	)
}