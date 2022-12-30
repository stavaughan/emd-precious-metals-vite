import React from 'react'
import { Button } from 'src/components/Buttons';
import clsx from 'clsx';

const DeleteButton = ({ deleteButtonHandler, small }) => {

    return (
        <Button
            type="button"
            className={clsx(
				"btn-close shadow-sm rounded-circle my-auto",
				small && 'text-sm',
			)}
			rest={{
				onClick: deleteButtonHandler,
				'aria-label': 'Delete'
			}}
        />
    );
};

export default DeleteButton;
