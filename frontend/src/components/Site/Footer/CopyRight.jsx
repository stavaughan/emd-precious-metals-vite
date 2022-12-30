import React from 'react'
import { controlProps } from 'src/globals/js';
import { useMobile } from 'src/hooks';
import clsx from 'clsx';

const CopyRight = ({ settings }) => {

	const { isXSmall } = useMobile();

    const copyRight = settings?.copyRight;
    const encodedURL = copyRight ? encodeURI(copyRight?.link) : '';

    const copyRightText = `Copyright © ${new Date().getFullYear()} ${settings?.copyRight?.label}`

    return (
        <div className="text-center">
            <a
                className={clsx(
					isXSmall ? 'text-xs' : 'text-sm',
					'text-gray-300-hover'
				)}
                {...controlProps.newTab(encodedURL)}
				role="button"
            >
                {copyRightText}
            </a>
        </div>
    )
}

export default CopyRight
