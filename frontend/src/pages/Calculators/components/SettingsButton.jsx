import React from 'react'
import { ToolTip } from 'src/components/ToolTip';
import { themeClasses } from 'src/theme';
import clsx from 'clsx';
import { ModalButton } from 'src/components/Buttons/Type';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const SettingsButton = ({ className, modalID }) => {

    return (
        <ToolTip tip="Settings" span>
            <ModalButton
                className={clsx(
					themeClasses.button.icon.light,
					className
				)}
				modalID={modalID}
            >
				<FAIcon icon="cog" />
			</ModalButton>
        </ToolTip>
    )
}

export default SettingsButton
