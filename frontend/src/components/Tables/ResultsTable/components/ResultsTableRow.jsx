import { RowImageCol, RowActionCol } from '.';
import React, { useCallback } from 'react'

const ResultsTableRow = ({
	item,
	upload,
	setResults,
	rowColClasses,
	colClass,
	setID,
	onDelete,
	loading,
	deleteId
}) => {

	const getColClass = useCallback((idx) => {
		if (!colClass && (!rowColClasses || !rowColClasses.length)) return {};
		return rowColClasses && rowColClasses?.length
			? { className: rowColClasses[idx + 1] }
			: colClass(idx, 1);
	}, [rowColClasses, colClass]);


	return (
		<tr>
			<RowImageCol
				item={item}
				upload={upload}
				setResults={setResults}
			/>
			{(item?.content && item.content?.length)
				? item.content.map((col, idx) => (
					<td key={idx} {...getColClass(idx)}>{col}</td>
				)) : null}
			<RowActionCol
				image={item?.image}
				setResults={setResults}
				itemID={item._id}
				setID={setID}
				onDelete={onDelete}
				loading={loading}
				deleteId={deleteId}
			/>
		</tr>
	)
}

export default ResultsTableRow
