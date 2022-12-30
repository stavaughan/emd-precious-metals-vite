import React from 'react'
import { Header, Footer } from 'src/components/Site';

const Layout = ({ settings, isLoading, children }) => {

	return (
		<>
			<div className="content">
				<Header
					settings={settings}
					isLoading={isLoading}
				/>
				<main>
					{children}
				</main>
			</div>
			<Footer settings={settings} />
		</>
	);
};

export default Layout;
