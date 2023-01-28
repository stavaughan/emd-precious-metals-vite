import React from 'react'
import { ImagesUpload } from "src/components/Upload";
import { PlaceholderImage } from ".";

import Classes from "../styles/resultsTable.module.css";

const RowImageUpload = ({
	item,
	upload,
	setResults
}) => {

	const onImageUpload = (fileObj) => {
		if (setResults) {
			setResults((prev) =>
				prev.map((file) =>
					file._id === item._id
						? {
							...file,
							image: fileObj
						} : file
				)
			);
		}
	};

	const wrapClass = `${Classes["image-placeholder"]} bg-transparent`;
	const wrapStyle = { marginBottom: "5px" };
	const uploadStyle = { width: "5.46rem", height: "5.46rem" };
	const uploadProps = {
		type: "file",
		mimeType: "image/*",
		maxSize: "5MB",
		noLabel: true,
		onUpload: onImageUpload,
		style: uploadStyle,
		base64: true
	};

	return (
		<span className={wrapClass} style={wrapStyle}>
			{upload
				? <ImagesUpload {...uploadProps} />
				: <PlaceholderImage width="5.46rem" height="5.46rem" />
			}
		</span>
	)
}

export default RowImageUpload
