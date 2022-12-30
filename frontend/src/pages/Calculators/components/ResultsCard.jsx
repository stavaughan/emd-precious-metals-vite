import React from 'react'
import { Card, CardBody, CardTitleActionsHeader } from 'src/components/Card';
import { ResultsTableWrapper, ResultsHeaderBar } from 'src/components/Tables/ResultsTable';
import { ButtonRow } from 'src/components/Buttons/ButtonRows';
import { Global } from 'src/globals/js';

const ResultsCard = ({ metalsProps }) => {

	const {
		printRef,
		setStoredValues,
		actionButtons,
		pageContent,
		metalPrices,
		handleDelete,
		storedValues
	} = metalsProps;

	if (!storedValues?.length) return null;

	return (
		<div ref={printRef}>
			<Card>
				<CardTitleActionsHeader title="Metals Results Values" section>
					<span className="d-print-none">
						<ButtonRow btnItems={actionButtons} />
					</span>
				</CardTitleActionsHeader>
				<CardBody>
					<div className="mt-2">
						<ResultsHeaderBar
							quantity={storedValues.length}
							headContent={metalPrices?.date && (
								<div className="text-xs text-slate-500">
									{Global._Date.formatted(metalPrices.date, 'full')}
								</div>
							)}
						/>
						<ResultsTableWrapper
							results={storedValues}
							setResults={setStoredValues}
							headItems={pageContent.head}
							colClasses={pageContent.colClasses}
							footerContent={pageContent.footer}
							onDelete={handleDelete}
							upload={true}
						/>
					</div>
				</CardBody>
			</Card>
		</div>
	)
}

export default ResultsCard
