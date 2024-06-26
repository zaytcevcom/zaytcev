import React, {useEffect} from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";
import { S } from './GoTop_Styles';
import {settings} from "../../styles/settings";
import {useTheme} from "styled-components";

export const GoTop = () => {

    const theme = useTheme();
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 200);
        })
    });

    if (!visible) {
        return null;
    }

    return (
        <S.GoTop onClick={() => scroll.scrollToTop({duration: settings.animation.scrollDuration})}>
            <Icon
                iconId={"arrow-top"}
                height={"25px"}
                width={"25px"}
                viewBox={"0 0 24 24"}
                color={theme.color.primary}
            />
        </S.GoTop>
    );
};
