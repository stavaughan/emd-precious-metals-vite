import React, { useState, useRef } from 'react';
import { DropzoneWrapper, useUploadLogic } from './components';
import { UploadResults } from './ImageUpload';

const ImagesUpload = ({
	type,
	maxSize,
	setFile,
	noLabel,
	onUpload,
	mimeType,
	base64,
	style,
	multi
}) => {

	const { imageBase64, imageUint8Array } = useUploadLogic();

	const hiddenFileInput = useRef(null);

	const [files, setFiles] = useState([]);

	const onClickHandler = (e) => {
		hiddenFileInput.current.click()
	};

	const handleOnDrop = (e) => {
		hiddenFileInput.current.drop();
	}

	const onFileUpload = async (e) => {
		base64 ? await imageBase64({
			files: e.target.files,
			setFiles: !setFile ? setFiles : '',
			setFile: setFile || '',
			onUpload
		}) : await imageUint8Array({
			files: e.target.files,
			setFile: setFile || '',
			setFiles: !setFile ? setFiles : '',
			onUpload
		});
	};

	return (
		<DropzoneWrapper
			handleClick={onClickHandler}
			onDropHandler={handleOnDrop}
			onFileUpload={onFileUpload}
			inputRef={hiddenFileInput}
			noLabel={noLabel}
			mimeType={mimeType}
			multiple={multi}
			maxSize={maxSize}
			style={style}
			type={type}
		>
			{(files?.length && !setFile) ? (
				<UploadResults files={files} setFiles={setFiles} />
			) : null}
		</DropzoneWrapper>
	)
}

export default ImagesUpload
