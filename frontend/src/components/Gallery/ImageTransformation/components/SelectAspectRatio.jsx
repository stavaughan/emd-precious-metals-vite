import React, { useMemo } from 'react';
import { themeClasses } from 'src/theme';
import { Row } from 'src/components/HTML'
import { AspectRatio, useImageMethods } from '.';

const SelectAspectRatio = ({ ratioID, setRatioID, base }) => {

	const { aspectRatios } = useImageMethods();

    const ratios = useMemo(() => aspectRatios({ base }), [base, aspectRatios])

    return (
        <div className="ps-3">
            <label className={themeClasses.forms.inputGroups.label.field}>
				Aspect Ratio
			</label>
            <Row className="g-2">
                {ratios.map(ratio => (
                    <AspectRatio
                        key={ratio._id}
                        ratio={ratio}
                        width={ratio.width}
                        height={ratio.height}
                        ratioID={ratioID}
                        setRatioID={setRatioID}
                    />
                ))}
            </Row>
        </div>
    )
}

export default SelectAspectRatio
