import { PageTitle, TitleIcon } from '.';

const PageHeader = () => {

	return (
		<div className="container-lg mb-3 py-4 d-print-none">
			<div className="d-flex justify-content-start align-items-center">
				<div className="me-3">
					<TitleIcon />
				</div>
				<PageTitle
					pageGroup="calculators"
					baseTitle="Precious Metals Scrap Calculator"
				/>
			</div>
		</div>
	);
};

export default PageHeader;
