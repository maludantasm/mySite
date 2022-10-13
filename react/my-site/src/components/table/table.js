import './table.css'
import tbl from './table.json'
import WhatIDoElement from '../whatIDoElements'

export const Table = (props) => {
	return(props.elements.map((element) => {
		return(<WhatIDoElement key={element.id} path={element.path} title={element.title} text={element.text}/>)
	}))
	
	// return(
	// 	<table className="n-by-2">
	// 		<tr>
	// 			<td>

	// 			</td>
	// 		</tr>
	// 	</table>
	// )
}