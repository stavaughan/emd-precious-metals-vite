import React from 'react'
import clsx from 'clsx';
import { FootNote } from 'src/components/labels';
import { controlProps } from 'src/globals/js';
import { useMobile } from 'src/hooks';
import { MetalPrice, MetalPricesDate } from '.';

const MetalPricesRibbon = ({ metalsProps }) => {

	const { metals, metalPrices, hasPrices } = metalsProps;

	const { isXSmall } = useMobile();

	const troyOzMessage = 'Troy ounces (ozt) are used in the precious metals industry. 1 troy ounce = 31.1034768 grams.';
	const metalsURL = encodeURI('https://metals-api.com/');

	if (!hasPrices) return null;

	return (
		<div className="text-center my-4 bg-light rounded-3 py-4 text-muted">
			{metalPrices?.date ? <MetalPricesDate pricesDate={metalPrices.date} /> : null}
			<div className={clsx(
				'd-flex',
				isXSmall ? 'flex-column' : 'justify-content-center'
			)}>
				{metals.map((metal, idx) => (
					<MetalPrice
						key={metal}
						metalPrices={metalPrices}
						metal={metal}
						metals={metals}
						asterisk="**"
						idx={idx}
					/>
				))}
			</div>
			<div className="text-xs text-gray-700 fst-italic fst-light">
				<div className="mt-3 mb-2">
					<FootNote symbol="*" className="me-1">
						<span className="me-1">
							source:
						</span>
						<a
							role="button"
							{...controlProps.newTab(metalsURL)}
						>
							Metals-API
						</a>
					</FootNote>
				</div>
				<div className="px-4 mx-3">
					<FootNote symbol="**" className="me-1">
						{troyOzMessage}
					</FootNote>
				</div>
			</div>
		</div>
	)
}

export default MetalPricesRibbon
