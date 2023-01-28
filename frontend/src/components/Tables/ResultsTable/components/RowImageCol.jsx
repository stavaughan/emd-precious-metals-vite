import React from 'react'
import { ImageThumbnail, RowImageUpload } from '.';

const RowImageCol = ({ item, upload, setResults }) => {

	return (
		<td style={{ width: '7rem' }}>
			{item?.image?.isImage
				? <ImageThumbnail image={item?.image} />
				: (
					<RowImageUpload
						item={item}
						upload={upload}
						setResults={setResults}
					/>
				)}
		</td>
	)
}

export default RowImageCol
