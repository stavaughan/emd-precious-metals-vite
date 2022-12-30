import React from 'react'
import { Card, CardBody, CardTitleActionsHeader } from 'src/components/Card'
import { FormInputs, FetchPricesButton } from '.';
import { LoaderButton } from 'src/components/Buttons';

const InputCard = ({ metalsProps }) => {

	const { hasPrices, hasInputs, clearResult, calculateResult } = metalsProps;

	return (
		<Card className="d-print-none">
			<CardTitleActionsHeader
				title="Precious Metal Price Calculator"
				section
			>
				{hasPrices ? <FetchPricesButton metalsProps={metalsProps} /> : null}
			</CardTitleActionsHeader>
			<CardBody>
				{hasInputs ? (
					<div className="d-flex justify-content-end align-items-center">
						<LoaderButton
							className="btn-sm btn-light me-3"
							label="Clear"
							setOnclick={clearResult}
						/>
						<LoaderButton
							className="btn-sm btn-primary text-sm"
							label="Calculate"
							setOnclick={calculateResult}
						/>
					</div>
				) : null}
				{hasPrices ? <FormInputs metalsProps={metalsProps} />  : (
					<div className="text-center">
						<FetchPricesButton
							metalsProps={metalsProps}
							className="rounded-pill bg-light text-primary text-sm font-semibold shadow-sm my-auto"
							label="Fetch Prices"
						/>
					</div>
				)}
			</CardBody>
		</Card>
	)
}

export default InputCard
