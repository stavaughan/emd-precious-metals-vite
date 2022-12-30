import React from 'react'
import { DropdownSelect } from '.';

const InputDropdown = ({
	selected,
	onChange,
	optionData,
	optional,
	required,
	onBlur,
	label,
	smallLabel,
	componentLabel,
	selectClass,
	...props
}) => {

	return (
		<DropdownSelect
			options={optionData}
			label={label}
			onChange={onChange}
			selected={selected}
			onBlur={onBlur}
			optional={optional}
			required={required}
			smallLabel={smallLabel}
			componentLabel={componentLabel}
			selectClass={selectClass}
			{...props}
		/>
	)
}

export default InputDropdown
