import React from 'react'
import clsx from 'clsx';
import { RoundIconBtn } from 'src/components/Icons';

const RowEditDelete = ({ onSetEditID, handleDelete, showEdit }) => {

	const onHandleEdit = (e) => {
		e.preventDefault();
		onSetEditID();
	};

	const onHandleDelete = (e) => {
		e.preventDefault();
		!!handleDelete && handleDelete();
	};

	return (
		<>
			<RoundIconBtn
				icon={showEdit ? 'times' : "pencil-alt"}
				color={clsx(
					"text-xs",
					showEdit ? 'text-danger' : "text-slate-300"
				)}
				onClick={onHandleEdit}
				xSmall
				alt
			/>
			{!!handleDelete && (
				<RoundIconBtn
					icon={['far', 'trash-alt']}
					color="text-xs text-slate-300"
					onClick={onHandleDelete}
					xSmall
				/>
			)}
		</>
	)
}

export default RowEditDelete
