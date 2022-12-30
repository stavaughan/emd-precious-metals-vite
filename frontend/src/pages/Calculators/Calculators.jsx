import React from 'react'
import { PageContainer } from 'src/components/Containers';
import { ImageCropModal } from 'src/components/Gallery/ImageTransformation';
import { useMetalsLogic } from "src/hooks";
import { Layout } from 'src/Layout';
import { useSelector } from 'react-redux';
import ErrorBoundary from 'src/state/ErrorBoundary';
import {
	InformationModal,
	InputCard,
	MetalPricesRibbon,
	ResultsCard
} from './components';

const Calculators = () => {

	const { settings, isLoading } = useSelector(state => state.setting);

	const metalsProps = useMetalsLogic();

	return (
		<Layout
			settings={settings}
			isLoading={isLoading}
		>
			<PageContainer>
				<ErrorBoundary>
					<ImageCropModal />
					<InformationModal metalsProps={metalsProps} />
					<MetalPricesRibbon metalsProps={metalsProps} />
					<InputCard metalsProps={metalsProps} />
					<ResultsCard metalsProps={metalsProps} />
				</ErrorBoundary>
			</PageContainer>
		</Layout>
	)
}

export default Calculators
