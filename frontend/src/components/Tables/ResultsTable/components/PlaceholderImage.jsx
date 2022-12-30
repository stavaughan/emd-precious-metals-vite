import React from 'react'
import { ImagesUpload } from 'src/components/Upload';
import { Card } from 'src/components/Card';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

import Classes from '../styles/ResultsTable.module.css'
import ImgClasses from '../../../Gallery/styles/images.module.css'

const PlaceholderImage = ({
	width,
	height,
	onUploadImage,
	image
}) => {

	return (
		<>
			{image?.isImage ? (
				<div className={clsx(ImgClasses["image-view--container"], 'mx-2')}>
					<span className={ImgClasses['image-view--overlay']}>
						<FAIcon icon="plus" className={ImgClasses['image-thumbnail--plus']} size="sm" />
					</span>
					<Card className={clsx(ImgClasses["image-thumbnail-lg"], 'mb-0')}>
						<img
							src={image?.url}
							alt={image?.name}
							style={{
								width,
								height,
							}}
						/>
					</Card>
				</div>
			) : (
				<div className={`${Classes['image-placeholder']} bg-transparent`}>
					<ImagesUpload
						type="file"
						mimeType="image/*"
						maxSize="5MB"
						noLabel={true}
						onUpload={onUploadImage}
						base64
						style={{ width, height }}
					/>
				</div>
			)}
		</>
	)
}

export default PlaceholderImage
