import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SvgIcons } from 'src/components/SVGs';
import { AlertPage, Layout } from 'src/Layout';
import ErrorBoundary from 'src/state/ErrorBoundary';

const Unauthorized = () => {

	const { settings, isLoading } = useSelector(state => state.setting);

	const navigate = useNavigate();

	useEffect(() => {
		window.onbeforeunload = () => {
			navigate('/');
		}
		return () => {
			window.onbeforeunload = null;
		}
	}, [navigate]);

	return (
		<Layout
			settings={settings}
			isLoading={isLoading}
		>
			<ErrorBoundary>
				<AlertPage
					title="Unauthorized Access."
					label="Go Back"
					BackGroundSVG={SvgIcons.AccessDeniedIcon}
					onClickHandler={() => navigate('/')}
				/>
			</ErrorBoundary>
		</Layout>
	)
}

export default Unauthorized
