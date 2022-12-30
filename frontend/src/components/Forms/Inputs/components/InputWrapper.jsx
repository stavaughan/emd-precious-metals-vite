import React from 'react'
import { AlertsWrapper } from 'src/components/Alerts/components';
import clsx from 'clsx';

const InputWrapper = ({
	InvalidFeedBack,
	floating,
	className,
	helperMsg,
	style,
	alert,
	error,
	children
}) => {

	return (
		<>
			<div
				className={clsx(floating && 'form-floating', className)}
				{...style && { style }}
			>
				{children}
				{helperMsg && (
					<div className="alert alert-info text-xs my-2" role="alert">
						{helperMsg}
					</div>
				)}
				{InvalidFeedBack && (
					<div className="my-2">
						{InvalidFeedBack}
					</div>
				)}
			</div>
			{error && <AlertsWrapper>{alert}</AlertsWrapper>}
		</>
	)
}

export default InputWrapper
