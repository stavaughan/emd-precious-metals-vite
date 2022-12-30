import React from 'react'

const ResultsTableFooter = ({ content, colWidth, colClass }) => {
	return (
		<tfoot>
			<tr>
				{content.map((item, idx) => (
					<td
						key={idx}
						{...colWidth(idx)}
						{...colClass(idx)}
					>
						{item || ''}
					</td>
				))}
			</tr>
		</tfoot>
	)
}

export default ResultsTableFooter
