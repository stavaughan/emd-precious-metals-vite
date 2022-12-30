import React, { useEffect } from "react";
import { getSettings } from 'src/features/settings/settingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";

const useLoadSettings = () => {

	const dispatch = useDispatch()

	const slice = useSelector((state) => state.settings)

	const status500 = `Request failed with status code 500`;
	const status404 = `not found!`;

	useEffect(() => {
		if (slice?.isError) {
			if ([status500, status404].includes(slice?.message)) {
				toast.error(`Settings data cannot be fetched at this time due to server error. Please try again later.`, {
					toastId: `onloadsettingserror`,
					position: 'top-center'
				})
			} else {
				toast.error(slice?.message, {
					toastId: `onloadsettings`,
					position: 'top-center'
				})
			}
		} else {
			dispatch(getSettings())
		}
		// eslint-disable-next-line
	}, [])

	return { ...slice }
}

export default useLoadSettings
