import React from 'react'
import { Global } from 'src/globals/js';
import { themeClasses } from 'src/theme';
import clsx from 'clsx';

const SupNotice = ({ notice }) => (
	<sup className={clsx(
		'ms-1 text-xs fst-italic font-light',
		notice === 'required' ? 'text-danger' : 'text-muted'
	)}>{notice === 'required' ? '*' : ' (optional)'}</sup>
);

const InputLabel = ({
	id,
	className,
	required,
	optional,
	label,
	labelClass,
	smallLabel,
	componentLabel
}) => {

	const defaultClass = smallLabel
		? themeClasses.forms.inputGroups.label.fieldSmall
		: themeClasses.forms.inputGroups.label.field;

	return (
		<label
			htmlFor={id}
			className={clsx(className || defaultClass, labelClass)}
		>
			{label && Global.upperCaseFirst(label)}
			{componentLabel && componentLabel}
			{optional && <SupNotice notice="optional" />}
			{required && <SupNotice notice="required" />}
		</label>
	)
}

export default InputLabel
