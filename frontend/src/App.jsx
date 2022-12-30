import React from 'react';
import { Calculators, NotFound, Unauthorized } from 'src/pages';
import { Route, Routes } from 'react-router-dom';
import { SettingsContextProvider } from 'src/contexts/settings-context';
import { useLoadSettings } from 'src/hooks';
import { faIconList } from 'src/theme';

import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

faIconList();

const App = () => {

	useLoadSettings();

	return (
		<SettingsContextProvider>
			<Routes>
				<Route path="/" element={<Calculators />} />
				<Route path="/api/*" element={<Unauthorized />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</SettingsContextProvider>
	);
};

export default App;
