import React, { useMemo } from 'react'
import { themeClasses } from 'src/theme';
import { ModalButton } from '.';
import { Button } from '..';
import clsx from 'clsx';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({
	icon,
	mode,
	modalID,
	onClick,
	modalClick,
	color = '',
	margin = '',
	loading = false,
	className,
	rest
}) => {

    const buttonClass = useMemo(() => mode === 'light'
        ? themeClasses.button.icon.light
        : themeClasses.button.icon.dark, [mode]);

    return (
        <>
            {modalID ? (
                <ModalButton
                    className={clsx(buttonClass, margin, color, className)}
                    modalID={modalID}
					{...modalClick && {
						rest: { onClick: modalClick }
					}}
                >
                    <FAIcon icon={icon} />
                </ModalButton>
            ) : (
                <Button
                    className={clsx(buttonClass, color, margin, className)}
                    rest={{ onClick, ...rest }}
                >
                    <FAIcon icon={loading ? 'circle-notch' : icon} {...loading && { spin: true }}/>
                </Button>
            )}
        </>
    )
}

export default IconButton
