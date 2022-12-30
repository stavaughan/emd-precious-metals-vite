import React from 'react'
import {
	useResultsTable,
	ResultsTableHead,
	ResultsTableFooter,
	ResultsTableRow
} from './components';

const ResultsTableWrapper = ({
	results,
	setResults,
	headItems,
	colWidths,
	colClasses,
	footerContent,
	setID,
	deleteId,
	loading,
	onDelete,
	upload,
	sticky
}) => {

	const { colWidth, colClass, rowColClasses } = useResultsTable({
		headItems,
		colWidths,
		colClasses,
		results
	});

	return (
		<div className="table-responsive">
			<table className="mt-3 table table-hover table-sm align-middle caption-top">
				<ResultsTableHead
					headItems={headItems}
					colWidth={colWidth}
					colClass={colClass}
					sticky={sticky}
				/>
				<tbody>
					{results?.length ? results.map(item => (
						<ResultsTableRow
							key={item._id}
							item={item}
							upload={upload}
							setResults={setResults}
							rowColClasses={rowColClasses}
							colClass={colClass}
							setID={setID}
							onDelete={onDelete}
							loading={loading}
							deleteId={deleteId}
						/>
					)) : null}
				</tbody>
				{footerContent?.length ? (
					<ResultsTableFooter
						content={footerContent}
						colWidth={colWidth}
						colClass={colClass}
					/>
				) : null}
			</table>
		</div>
	)
}

export default ResultsTableWrapper
