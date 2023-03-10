import React from 'react'
import { InputFileUpload } from 'src/components/Forms/Inputs';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import Classes from '../styles/Upload.module.css';

const centeredStyle = {
	opacity: 0.7,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	position: 'absolute'
};

const PrintIcon = ({ noLabel }) => (
	<FAIcon
		icon="images"
		className={clsx(
			'upload-icon',
			'fa-fw text-slate-400',
			noLabel ? 'fa-2x' : 'fa-3x pb-3'
		)}
		{...noLabel && { style: centeredStyle }}
	/>
);

const DropzoneWrapper = ({
	handleClick,
	onDropHandler,
	imageSelected,
	onFileUpload,
	inputValue,
	noLabel,
	inputRef,
	multiple,
	mimeType,
	maxSize,
	children,
	style,
	type
}) => {

	return (
		<>
			{!imageSelected && (
				<div
					tabIndex="0"
					className={clsx(
						Classes.dropzone,
						'rounded-2 position-relative',
						!noLabel && 'mb-4'
					)}
					{...style && { style }}
					{...handleClick && { onClick: handleClick }}
					{...onDropHandler && { onDrop: onDropHandler }}
				>
					{noLabel ? (
						<PrintIcon noLabel />
					) : (
						<>
							<PrintIcon />
							<div className="small text-secondary">
								<div>
									Drag or <span className="text-primary">browse</span> for {type} to upload.
								</div>
								<div className="text-sm font-normal">
									Allowable image size under {maxSize}
								</div>
							</div>
						</>
					)}
					<InputFileUpload
						inputRef={inputRef}
						onFileUpload={onFileUpload}
						value={inputValue || ''}
						mimeType={mimeType}
						multiple={multiple || false}
					/>
				</div>
			)}
			{children}
		</>
	)
}

export default DropzoneWrapper
