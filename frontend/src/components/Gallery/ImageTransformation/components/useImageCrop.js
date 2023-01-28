import { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { useDebounceEffect } from 'src/hooks';
import { useImageMethods } from ".";

const useImageCrop = ({
	setImageUpload,
	setImgSrc,
	setCrop
}) => {

	const {
		aspectRatios,
		cropDebounceParams,
		generateDownload
	} = useImageMethods();

	const previewRef = useRef(null)
	const imageRef = useRef(null)

	const [imageParams, setImageParams] = useState({
		scale: 1,
		rotate: 0,
		ratioID: 'ratio_1_1',
		aspectRatio: 1 / 1,
		imageFormat: 'image/jpeg',
		completedCrop: {},
		previewStyle: {
			border: '1px solid var(--slate-300)',
			objectFit: 'contain',
			width: 0,
			height: 0,
		},
		PixelCrop: {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			unit: 'px',
		},
		percentCrop: {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			unit: '%',
		},
	})

	const [isDownloaded, setIsDownloaded] = useState(false)

	const imageFormats = useMemo(() => [
		{ _id: 'image/jpeg', label: 'JPEG', ext: 'jpg' },
		{ _id: 'image/png', label: 'PNG', ext: 'png' },
		{ _id: 'image/webp', label: 'WEBP', ext: 'webp' },
	], [])

	const BASE = 40;

	const resetStates = useCallback(() => {
		!!setImageUpload && setImageUpload(false)
		setImageParams(prev => ({
			...prev,
			scale: 1,
			rotate: 0,
			ratioID: 'ratio_1_1',
			aspectRatio: 1 / 1,
			completedCrop: {},
			previewStyle: {
				border: '1px solid var(--slate-300)',
				objectFit: 'contain',
				width: 0,
				height: 0,
			},
			PixelCrop: {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				unit: 'px',
			},
			percentCrop: {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				unit: '%',
			},
		}))
		setImgSrc('')
		previewRef.current = null
		imageRef.current = null
		setCrop()
	}, [setCrop, setImgSrc, setImageUpload, setImageParams])

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			const ratioData = aspectRatios({ base: BASE }).find(_ => _._id === imageParams.ratioID);
			setImageParams(prev => ({
				...prev,
				aspectRatio: ratioData.value,
			}))
		}
		return () => mounted = false;
	}, [imageParams.ratioID, aspectRatios]);

	useEffect(() => {
		if(isDownloaded) {
			let timer = setTimeout(() => {
				resetStates();
				setIsDownloaded(false);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [isDownloaded, resetStates])

	const onImageDownload = useCallback(() => {
		generateDownload({
			canvas: previewRef.current,
			crop: imageParams.completedCrop,
			setIsDownloaded,
			format: imageParams.imageFormat,
			ext: imageFormats.find(_ => _._id === imageParams.imageFormat)?.ext || 'jpeg'
		})
	}, [imageParams?.completedCrop, generateDownload, imageParams?.imageFormat, imageFormats])

	const debounceParams = useMemo(() => cropDebounceParams({
		completedCrop: imageParams.completedCrop,
		previewRef,
		imageRef,
		scale: imageParams.scale,
		rotate: imageParams.rotate,
	}), [imageParams?.completedCrop, imageParams?.rotate, imageParams?.scale, cropDebounceParams])

	useDebounceEffect(debounceParams)

	return {
		previewRef,
		imageRef,
		imageParams,
		setImageParams,
		onImageDownload,
		resetStates,
		imageFormats,
		BASE
	}
}

export default useImageCrop;
