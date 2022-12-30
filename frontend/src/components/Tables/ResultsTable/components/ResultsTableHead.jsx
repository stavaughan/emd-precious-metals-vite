import React from 'react'

const ResultsTableHead = ({ headItems, colWidth, colClass }) => {
	return (
		<thead>
			<tr>
				{['', ...headItems].map((item, idx) => (
					<th
						key={idx}
						scope="col"
						{...colWidth(idx)}
						{...colClass(idx)}
					>
						{idx !== 0 && item}
					</th>
				))}
			</tr>
		</thead>
	)
}

export default ResultsTableHead
