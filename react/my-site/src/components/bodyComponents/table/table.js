import { TableGrid, TableColumn } from '../../../styled-components/tableStyle.js';
import WhatIDoElement from '../whatIDoElements'
import FormacaoElement from '../formacaoElements'

export const Table = (props) => {
	var display = props.display 
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

	if (display == 'grid') {
		return (
			<TableGrid>
				{result}
			</TableGrid>
		)
	}

	else if (display == 'column') {
		return (
			<TableColumn>
				{result}
			</TableColumn>
		)
	}
}