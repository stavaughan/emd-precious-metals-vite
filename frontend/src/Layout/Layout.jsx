import React from 'react'
import { Header, Footer } from 'src/components/Site';
import { PageHeader } from 'src/components/Page';

const Layout = ({ settings, isLoading, children }) => {

	return (
		<>
			<div className="content">
				<Header
					settings={settings}
					isLoading={isLoading}
				/>
				<main>
					<PageHeader />
					{children}
				</main>
			</div>
			<Footer settings={settings} />
		</>
	);
};

export default Layout;
