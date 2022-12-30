import React from 'react'
import { ImagesUpload } from 'src/components/Upload';
import { PlaceholderImage } from '.';

import Classes from '../styles/ResultsTable.module.css';
import ImgClasses from '../../../Gallery/styles/images.module.css';

const RowImage = ({ item, upload, setResults }) => {

	const onImageUpload = (fileObj) => {
		if (setResults) {
			setResults(prev => prev.map(file => file._id === item._id ? { ...file, image: fileObj } : file));
		}
	};

	return (
		<>
			{item?.image?.isImage ? (
				<span className={ImgClasses["image-thumbnail"]}>
					<img src={item?.image.url} alt={item?.image.name} />
				</span>
			) : (
				<span
					className={`${Classes['image-placeholder']} bg-transparent`}
					style={{ marginBottom: '5px' }}
				>
					{upload ? (
						<ImagesUpload
							type="file"
							mimeType="image/*"
							maxSize="5MB"
							noLabel={true}
							onUpload={onImageUpload}
							style={{ width: '5.46rem', height: '5.46rem' }}
							base64
						/>
					) : (
						<PlaceholderImage
							width="5.46rem"
							height="5.46rem"
						/>
					)}
				</span>
			)}
		</>
	)
}

export default RowImage
