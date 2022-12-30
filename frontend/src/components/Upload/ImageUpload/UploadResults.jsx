import { useState } from 'react'
import { ResultsHeaderBar } from 'src/components/Tables/ResultsTable';
import { RowImageCol, RowActionCol } from 'src/components/Tables/ResultsTable/components';
import { ResultsImages } from '.';

const UploadResults = ({ files, setFiles }) => {

	const [display, setDisplay] = useState('images');

	const headItems = ['File Name', 'Size', 'Modified Date', 'Actions'];

	return (
		<div className="mt-2">
			{files?.length ? (
				<ResultsHeaderBar
					quantity={files.length}
					display={display}
					setDisplay={setDisplay}
				/>
			) : null}
			{display === 'images' ? (
				<ResultsImages
					results={files}
					setFiles={setFiles}
					headItems={headItems}
				/>
			) : (
				<div className="table-responsive">
					<table className="mt-3 table table-hover table-sm align-middle caption-top">
						<thead>
							<tr>
								{['', ...headItems].map((item, idx) => (
									<th key={idx} scope="col">
										{idx !== 0 && item}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{files?.length ? files.map(item => (
								<tr key={item._id}>
									<RowImageCol
										item={item}
										setResults={setFiles}
									/>
									{(item?.content && item.content?.length)
										? item.content.map((col, idx) => (
											<td key={idx}>{col}</td>
										)) : null}
									<RowActionCol
										image={item?.image}
										setResults={setFiles}
										itemID={item._id}
									/>
								</tr>
							)) : null}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default UploadResults
