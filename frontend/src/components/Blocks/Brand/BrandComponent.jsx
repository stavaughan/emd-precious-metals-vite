import React from 'react';
import { SkeletonElem } from 'src/components/LoadingSkeleton';
import { BrandLogo, TrademarkName } from '.';
import clsx from 'clsx';

import Classes from './BrandComponent.module.css';

const BrandComponent = ({
	isLoading,
	baseName,
	subName,
	mark,
	color,
	small
}) => {

	const name = baseName ? baseName.toUpperCase() : '';

	return (
		<div className={clsx(
			'd-flex justify-content-start align-items-center',
			Classes[color ? 'emd-brand--color' : 'emd-brand--non-color'],
			small && Classes['emd-brand--small']
		)}>
			<div className={Classes['emd-brand--logo']}>
				{(isLoading || !name) ? (
					<SkeletonElem width="55" height="80" />
				) : (
					<BrandLogo color={color} width="55" />
				)}
			</div>
			<div>
				<div className={clsx(
					Classes['emd-brand--name'],
					small && 'ps-1',
					'leading-5'
				)}>
					<TrademarkName
						name={name}
						mark={mark}
						loading={isLoading}
					/>
				</div>
				{subName && <div className={clsx(
					small ? 'text-xxs' : 'text-xs',
					'text-gray-400 ps-1 leading-5'
				)}>{subName}</div>}
			</div>
		</div>
	);
};

export default BrandComponent;
