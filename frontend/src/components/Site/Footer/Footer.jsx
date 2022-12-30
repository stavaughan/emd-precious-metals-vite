import { SocialLinks, CopyRight } from '.';
import ErrorBoundary from 'src/state/ErrorBoundary';
import React, { useContext } from 'react';
import { SettingsContext } from 'src/contexts';
import clsx from 'clsx';

import Classes from './Footer.module.css'

const Footer = ({ settings }) => {

	const { screen } = useContext(SettingsContext);

	const { isXSmall } = screen;

	return (
		<footer className="gradient-indigo border-top d-print-none">
			<div
				className={clsx(
					isXSmall ? 'py-3' : 'pt-4 pb-3',
					'mx-auto overflow-hidden',
					Classes['padding-x']
				)}
				style={{ maxWidth: '80rem' }}
			>
				<ErrorBoundary>
					<SocialLinks settings={settings} />
					<CopyRight settings={settings} />
				</ErrorBoundary>
			</div>
		</footer>
	)
}

export default Footer
