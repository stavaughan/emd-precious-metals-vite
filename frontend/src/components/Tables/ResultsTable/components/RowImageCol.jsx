import React from 'react'
import { RowImage } from '.';

const RowImageCol = ({ item, upload, setResults }) => {

	return (
		<td style={{ width: '7rem' }}>
			<RowImage
				item={item}
				upload={upload}
				setResults={setResults}
			/>
		</td>
	)
}

export default RowImageCol
