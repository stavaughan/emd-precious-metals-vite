import { amountUSD, Global } from "src/globals/js";
import { preciousMetals } from "src/globals/js/lib";
import { useSetStorage } from "src/hooks";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useMetalsLogic = () => {

	const printRef = useRef(null);
	const storageType = 'local';

	const [spread, setSpread] = useSetStorage('metalSpread', storageType, 10);
	const [storedPrices, setStoredPrices] = useSetStorage('metalPrices', storageType, {});
	const [storedValues, setStoredValues, setClearValues] = useSetStorage('metalValues', storageType, []);
	const [loadingState, setLoadingState] = useState({ loadingRemove: false, loadingAdd: false });

	const [inputValues, setInputValues] = useState({
		metal: 'gold',
		quality: '',
		qualityLabel: '',
		qualityDisplay: '',
		weight: '',
		weightLabel: '',
		wsF: spread
	});

	const clearResult = useCallback(() => {
		setInputValues({
			metal: 'gold',
			quality: '',
			qualityLabel: '',
			qualityDisplay: '',
			weight: '',
			weightLabel: '',
			wsF: spread
		})
	}, [setInputValues, spread]);

	useEffect(() => {
		if (loadingState.loadingRemove) {
			setTimeout(() => {
				setLoadingState(prev => ({ ...prev, loadingRemove: false }))
				setClearValues(true)
				setStoredValues(_ => [])
			}, 1000);
		}
	}, [loadingState.loadingRemove, setStoredValues, setClearValues]);

	useEffect(() => {
		if (loadingState.loadingAdd) {
			setTimeout(() => {
				setLoadingState(prev => ({ ...prev, loadingAdd: false }))
			}, 1000);
		}
	}, [loadingState.loadingAdd]);

	const metalValue = useCallback(({
		metalPrice,
		metal,
		weight,
		qualityID
	}) => {

		// gold is measured by troy ounces vs English ounce
		const GRAMS_PER_TROY_OUNCE = 31.1034768;

		// const GRAMS_PER_OUNCE = 28.3495231;

		// percent precious metal in alloy based on quality and multiplied by 1000
		// e.g Pure gold is 24K. To get the percentage of gold in an 18K gold "alloy", you would divide 18 by 24 which comes out to 75% (0.75)
		const alloy = preciousMetals.quality[metal].find(_ => _._id === qualityID)?.alloy;

		const alloyDivisor = metal === 'gold' ? 24 : 1000;

		// 2.34 grams expressed as 2340 to avoid javascript floating point rounding errors
		const gramsOfMetal = weight * alloy / alloyDivisor;
		const ouncesOfMetal = gramsOfMetal / GRAMS_PER_TROY_OUNCE;
		const netValue = ouncesOfMetal * metalPrice * ((100 - spread) / 100)

		return netValue / 1000;
	}, [spread]);

	const calculateResult = useCallback(() => {
		const weight = inputValues?.weight ? inputValues?.weight / 1000 : 0;
		const metal = Global.upperCaseFirst(inputValues?.metal);
		const metalData = {
			metalPrice: storedPrices?.[inputValues?.metal],
			metal: inputValues?.metal,
			weight: inputValues?.weight || 0,
			qualityID: inputValues?.quality
		}
		const metalVal = metalValue(metalData);
		const formAmount = amountUSD({ num: metalVal, dec: 2 });
		setStoredValues(prev => [
			...prev,
			{
				_id: Global.objectIDsGenerator(1)[0],
				image: {},
				metal,
				quality: inputValues?.qualityDisplay,
				qualityID: inputValues?.quality,
				metalID: inputValues?.metal,
				amount: formAmount,
				result: metalVal,
				weight,
				content: [
					metal,
					inputValues?.qualityDisplay,
					weight,
					formAmount
				]
			}
		])
		clearResult()
	}, [inputValues, metalValue, clearResult, setStoredValues, storedPrices]);

	const pageContent = useMemo(() => ({
		head: ['Metal', 'Quality', 'Weight (grams)', 'Value', ''],
		colClasses: ['', '', '', 'text-end', 'text-end', 'text-end'],
		footer: ['', '', '',
			<span className="fw-bolder text-dark">
				{Global.propTotal(storedValues, 'weight').toFixed(2)}
			</span>,
			<span className="fw-bolder text-dark">
				{amountUSD({
					num: Global.propTotal(storedValues, 'result'),
					dec: 2
				})}
			</span>, '']
	}), [storedValues]);

	const dropDownOptions = useCallback((values) => ({
		metal: ['gold', 'silver', 'platinum'].map(_ => ({
			_id: _,
			label: Global.upperCaseFirst(_)
		})),
		quality: preciousMetals.quality[values.metal]
	}), []);

	// update metal prices from API
	const currentMetalPrices = useCallback((metals) => {
		const newDate = new Date();
		const updatedPrices = {
			gold: metals?.XAU ? 1 / metals.XAU : null,
			silver: metals?.XAG ? 1 / metals.XAG : null,
			platinum: metals?.XPT ? 1 / metals.XPT : null,
			date: newDate.toUTCString()
		};
		setStoredPrices(_ => updatedPrices)
		//updateExistingValues(updatedPrices)
	}, [setStoredPrices]);

	const hasPrices = useMemo(() => {
		return [!!storedPrices?.gold, !!storedPrices?.silver, !!storedPrices?.platinum].includes(true);
	}, [storedPrices?.gold, storedPrices?.silver, storedPrices?.platinum]);

	const hasInputs = useMemo(() => {
		return !!inputValues?.metal && !!inputValues?.weight && !!inputValues?.quality;
	}, [inputValues?.metal, inputValues?.weight, inputValues?.quality]);

	const metals = useMemo(() => Object.keys(storedPrices).filter(_ => _ !== 'date'), [storedPrices]);

	const onSaveToStorage = useCallback(() => {
		setLoadingState(prev => ({ ...prev, loadingAdd: true }))
	}, [setLoadingState]);

	const onRemoveFromStorage = useCallback(() => {
		setLoadingState(prev => ({ ...prev, loadingRemove: true }))
	}, [setLoadingState]);

	const actionButtons = useMemo(() => {
		return [
			{
				_id: 'uploadImage',
				type: 'modal',
				icon: 'crop-simple',
				modalID: 'imageUploadCrop',
				toolTip: `Image upload, crop and resize`
			},
			{
				_id: 'print',
				type: 'print',
				printRef,
				toolTip: 'precious metal items'
			},
			{
				_id: 'save',
				type: 'click',
				icon: 'download',
				onClick: onSaveToStorage,
				toolTip: 'Save to storage',
				loading: loadingState.loadingAdd
			},
			{
				_id: 'clear',
				type: 'click',
				icon: 'times',
				color: 'text-danger',
				onClick: onRemoveFromStorage,
				toolTip: `Clear all data`,
				loading: loadingState.loadingRemove
			}
		]
	}, [printRef, onSaveToStorage, onRemoveFromStorage, loadingState.loadingAdd, loadingState.loadingRemove]);

	const handleDelete = useCallback((id) => {
		setStoredValues(prev => prev.filter(item => item._id !== id))
	}, [setStoredValues])

	const spreadInfoMessage = 'The spread is the difference between the market value of your metal and the price you sell it a buyer for. It is typically expressed as a percentage of the market value. The market value represents the price at which the metal is currently being traded.';

	return {
		metals,
		printRef,
		pageContent,
		metalPrices: storedPrices,
		actionButtons,
		setInputValues,
		dropDownOptions,
		currentMetalPrices,
		spreadInfoMessage,
		inputValues,
		hasPrices,
		hasInputs,
		storedValues,
		setStoredValues,
		handleDelete,
		clearResult,
		calculateResult,
		setSpread,
		spread
	}
}

export default useMetalsLogic;
