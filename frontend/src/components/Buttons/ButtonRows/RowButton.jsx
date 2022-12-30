import React, { useMemo } from 'react';
import { IconDropDown } from 'src/components/DropDowns';
import { IconButton } from 'src/components/Buttons/Type';
import { ToolTip } from 'src/components/ToolTip';
import { PrintComponent } from 'src/services';
import { themeClasses } from 'src/theme';
import { SiteData } from 'src/data';

const RowButton = ({ btn, test, margin }) => {

    const today = new Date();
    const dateStr = today.getTime();

    const Buttons = useMemo(() => ([
        {
            type: 'modal',
            toolTip: btn?.toolTip,
            Elem: () => (
                <IconButton
                    icon={btn?.icon}
                    mode="light"
					{...btn?.color && { color: btn?.color }}
                    modalID={SiteData.modalIDs[btn?.modalID]}
					{...btn?.modalClick && {
						modalClick: btn.modalClick
					}}
					margin={margin}
                />
            )
        },
        {
            type: 'print',
            toolTip: `Print ${btn?.toolTip}`,
			noDisplay: !test,
            Elem: () => (
                <PrintComponent
                    className={themeClasses.button.icon.light}
                    componentRef={btn?.printRef}
					setPrinting={btn?.setPrinting}
                    documentTitle={`${btn?.toolTip}_${dateStr}`}
					margin={margin}
                />
            )
        },
        {
            type: 'click',
            toolTip: btn?.toolTip,
			noDisplay: !test,
            Elem: () => (
                <IconButton
                    icon={btn?.icon}
                    mode="light"
                    onClick={btn?.onClick}
					color={btn?.color}
					loading={btn?.loading}
					margin={margin}
                />
            )
        },
        {
            type: 'dropdown',
            toolTip: btn?.toolTip,
			noDisplay: !test,
            Elem: () => (
                <IconDropDown
                    buttonClass={themeClasses.button.icon.light}
                    setOption={btn?.setDDOption}
                    options={btn?.ddOptions}
					margin={margin}
                    icon={btn?.icon}
                />
            )
        }
    ]), [
        btn?.color,
        btn?.ddOptions,
        btn?.icon,
        btn?.modalClick,
        btn?.modalID,
        btn?.onClick,
        btn?.printRef,
        btn?.setDDOption,
        btn.toolTip,
		btn?.loading,
		btn?.setPrinting,
		margin,
		test,
        dateStr
    ]);

    const BtnObj = useMemo(() => Buttons.find(_ => _.type === btn.type), [Buttons, btn.type]);

	if(BtnObj?.noDisplay) {
		return <></>
	}

    return (
        <ToolTip tip={BtnObj.toolTip} span>
            <BtnObj.Elem />
        </ToolTip>
    )
}

export default RowButton
