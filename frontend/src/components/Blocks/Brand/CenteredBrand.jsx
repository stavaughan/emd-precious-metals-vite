import React from 'react'
import clsx from "clsx";
import { BrandComponent } from '..';

import Classes from './BrandComponent.module.css';

const CenteredBrand = ({ isSmall, loading, settings }) => {

	const developer = settings?.developer;

	return (
		<div className={clsx(
			"d-flex justify-content-center py-3",
			Classes["emd-brand-login--logo"]
		)}
		>
			<BrandComponent
				baseName={developer?.name}
				subName={developer?.subName}
				mark={settings?.siteBranding?.mark}
				isLoading={loading}
				small={isSmall}
				color
			/>
		</div>
	)
}

export default CenteredBrand
