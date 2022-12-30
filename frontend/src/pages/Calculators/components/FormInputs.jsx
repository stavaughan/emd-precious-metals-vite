import React, { useMemo } from 'react';
import { InputCol, GroupInputRow } from 'src/components/Forms/components';
import { preciousMetals } from 'src/globals/js/lib';
import { Global } from 'src/globals/js';

const FormInputs = ({ metalsProps }) => {

	const { inputValues, setInputValues, dropDownOptions } = metalsProps;

	const ddOptions = useMemo(() => dropDownOptions(inputValues), [inputValues, dropDownOptions])

	const allQualities = useMemo(() => {
		const allQuals = ['gold', 'silver', 'platinum']
			.map(metal => preciousMetals.quality[metal]);
		return allQuals.flat();
	}, []);

	const onSelectMetal = (value) => setInputValues(prev => ({
		...prev,
		metal: value.toLowerCase()
	}));

	const onSelectQual = (value) => setInputValues(prev => ({
		...prev,
		quality: value,
		qualityLabel: value ? allQualities.find(qual => qual._id === value).label : '',
		qualityDisplay: value ? allQualities.find(qual => qual._id === value).display : ''
	}));

	const onSetWeight = (value) => {
		const weightVal = Global.numbersOnly(value);

		if (weightVal) {
			setInputValues(prev => ({
				...prev,
				weight: weightVal * 1000,
				weightLabel: value
			}))
		};
	};

	return (
		<GroupInputRow label="Metal Details">
			<InputCol.Dropdown
				cols="6 sm-4 md-3"
				label="Metal"
				id="inputmetaltype"
				optionData={ddOptions.metal}
				onChange={onSelectMetal}
				selected={inputValues.metal}
				required
			/>
			<InputCol.Dropdown
				cols="6 sm-4 md-3"
				id="inputmetalqual"
				label={`${Global.upperCaseFirst(inputValues.metal)} Quality'`}
				optionData={ddOptions.quality}
				onChange={onSelectQual}
				selected={inputValues?.quality || ''}
				required
			/>
			<InputCol.Text
				cols="6 sm-4 md-3"
				id="inputmetalweight"
				label={`${Global.upperCaseFirst(inputValues.metal)} Weight (grams)`}
				value={inputValues?.weightLabel || ''}
				onChange={onSetWeight}
				required
			/>
		</GroupInputRow>
	)
}

export default FormInputs
