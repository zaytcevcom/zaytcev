import React from 'react';

import ReactSwitch from "react-switch";
import {useTheme} from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type SwitchPropsType = {
    handle: () => void,
    checked: boolean
}

export const Switch: React.FC<SwitchPropsType> = (props: SwitchPropsType) => {

    const theme = useTheme();

    return (
        <ReactSwitch
            onChange={props.handle}
            checked={props.checked}

            checkedIcon={<Icon iconId={"moon"} width={"26px"} height={"26px"} viewBox={"-4 -4 28 28"} color={theme.background.secondary} />}
            onColor={theme.background.primary}
            onHandleColor={theme.gradient.second}

            uncheckedIcon={<Icon iconId={"sun"} width={"26px"} height={"26px"} viewBox={"-6 -4 28 28"} color={theme.background.secondary} />}
            offColor={theme.background.primary}
            offHandleColor={theme.gradient.second}

            activeBoxShadow={`0 0 2px 2px ${theme.gradient.first}`}
            handleDiameter={24}
            height={30}
            width={58}
        />
    )
}
