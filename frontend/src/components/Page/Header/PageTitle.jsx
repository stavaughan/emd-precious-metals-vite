import clsx from 'clsx';
import { Col } from 'src/components/HTML';
import { GradientTitleBlock } from 'src/components/Blocks';
import { useContext } from 'react';
import { SettingsContext } from 'src/contexts';

const PageTitle = ({ pageGroup, baseTitle }) => {

	const { screen, fontSize } = useContext(SettingsContext);
	const{ isXSmall } = screen;
	const { smallText } = fontSize;

	return (
		<Col className="ms-n3 ms-md-n2">
			{pageGroup && (
				<div
					className={clsx(
						'mt-1 text-uppercase text-slate-500',
						smallText
					)}
					style={{ letterSpacing: isXSmall ? '.11rem' : '.09em' }}
				>
					{pageGroup}
				</div>
			)}
			<GradientTitleBlock
				gradient
				title={baseTitle}
			/>
		</Col>
	)
};

export default PageTitle;
