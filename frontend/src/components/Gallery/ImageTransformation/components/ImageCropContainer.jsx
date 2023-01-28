import React, { useState, useEffect } from 'react'
import { ImageInputs, ImageCropComponent } from '.';
import { CloseButton } from 'src/components/Buttons/Type';
import { Button } from 'src/components/Buttons';
import { useImageCrop } from '.';

const ImageCropContainer = ({ crop, setCrop, imgSrc, submitLabel, ...props }) => {

	const [previewStyle, setPreviewStyle] = useState({
		border: '1px solid var(--slate-300)',
		objectFit: 'contain',
		width: 0,
		height: 0,
	});

	const {
		aspectRatio,
		previewRef,
		imageRef,
		ratioID,
		setRatioID,
		completedCrop,
		setCompletedCrop,
		scale,
		setScale,
		rotate,
		setRotate,
		onImageDownload,
		resetStates,
		imageFormat,
		imageFormats,
		setImageFormat,
		BASE
	} = useImageCrop({
		...props?.setImageUpload && { setImageUpload: props.setImageUpload },
		setImgSrc: props.setImgSrc,
		setCrop
	})

	useEffect(() => {
		if (completedCrop?.width) {
			setPreviewStyle(prev => ({
				...prev,
				width: completedCrop.width,
				height: completedCrop.height
			}))
		}
	}, [completedCrop])

	const handleImageDownload = async (e) => {
		e.preventDefault();
		!!props?.setImageID
			? props.setImageID()
			: onImageDownload();
	};

	return (
		<div>
			{imgSrc && (
				<div className="d-flex justify-content-center">
					<ImageCropComponent
						crop={crop}
						setCrop={setCrop}
						imgSrc={imgSrc}
						imageRef={imageRef}
						scale={scale}
						rotate={rotate}
						aspectRatio={aspectRatio}
						setCompletedCrop={setCompletedCrop}
					/>
				</div>
			)}
			{completedCrop?.width ? (
				<>
					<div className="d-flex justify-content-center align-items-start my-4">
						<div className=" me-3">
							<canvas
								ref={previewRef}
								className="rounded d-block mx-auto shadow-lg"
								style={previewStyle}
							/>
						</div>
						<CloseButton handleClose={resetStates} />
					</div>
					<ImageInputs
						scale={scale}
						setScale={setScale}
						rotate={rotate}
						setRotate={setRotate}
						ratioID={ratioID}
						setRatioID={setRatioID}
						imageFormat={imageFormat}
						imageFormats={imageFormats}
						setImageFormat={setImageFormat}
						base={BASE}
					/>
					<div className="mb-3 text-center">
						<Button
							className="btn-sm text-gray-500 me-3"
							rest={{ onClick: resetStates }}
						>
							Cancel
						</Button>
						<Button
							className="btn-sm btn-bd-primary-indigo"
							rest={{ onClick: handleImageDownload }}
						>
							{submitLabel || 'Download'} Image
						</Button>
					</div>
				</>
			) : null}
		</div>
	)
}

export default ImageCropContainer
