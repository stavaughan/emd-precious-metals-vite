import React, { useContext } from 'react'
import { SkeletonElem } from 'src/components/LoadingSkeleton';
import { SettingsContext } from 'src/contexts';

import Classes from './BrandComponent.module.css';

/**
 *
 * @param {mark} enum('registered', 'trademark')
 * @returns
 */
const BrandName = ({ name, mark }) => {
	if (!mark) return name;
	return (
		<>
			{name}
			<sup className={Classes['emd-brand--trademark']}>
				{mark === 'registered' ? '\u00AE' : '\u2122'}
			</sup>
		</>
	);
};

const TrademarkName = ({ name, mark, loading }) => {

	const { isSmall } = useContext(SettingsContext).screen;

	return (
		<>
			{(loading || !name) ? (
				<SkeletonElem
					width={isSmall ? '80px' : '180px'}
					height="25px"
				/>
			) : <BrandName name={name} mark={mark} />}
		</>
	);
}

export default TrademarkName
