import React from 'react'
import { useMobile } from 'src/hooks';
import { amountUSD, Global } from 'src/globals/js';
import { FootNote } from 'src/components/labels';

const FormattedPrice = ({ price, ast }) => (
	<FootNote
		className="text-xxs text-slate-500 ms-1"
		symbol={ast}
		aft
	>
		{`${amountUSD({ num: price, dec: 2 })}/ozt`}
	</FootNote>
);

const MetalPrice = ({ metal, metals, metalPrices, asterisk, idx }) => {

	const { isXSmall } = useMobile();
	const { isLast, upperCaseFirst } = Global;

	return (
		<div className={isXSmall ? 'mb-2 mx-5 px-5' : 'text-sm me-3'}>
			{isXSmall ? (
				<div className="text-sm d-flex justify-content-between align-items-center">
					<div className="text-xs text-dark">{upperCaseFirst(metal)}:</div>
					<div className="text-primary font-medium">
						{metalPrices[metal] ? (
							<FormattedPrice
								price={(metalPrices[metal])}
								ast={asterisk}
							/>
						) : 'no price..'}
					</div>
				</div>
			) : (
				<>
					<span className="text-xs text-dark me-2">{upperCaseFirst(metal)}:</span>
					<span className="text-primary font-medium me-1">
						{metalPrices[metal] ? (
							<FormattedPrice
								price={(metalPrices[metal])}
								ast={asterisk}
							/>
						) : 'no price..'}
					</span>
					{!isLast(metals, idx) ? <span className="ms-2 fw-light text-muted">|</span> : null}
				</>
			)}
		</div>
	)
}

export default MetalPrice
