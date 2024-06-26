import React from 'react';
import {S} from "./Logo_Styles";

import {animateScroll as scroll} from "react-scroll";
import {settings} from "../../styles/settings";

export const Logo: React.FC = () => {
    return (
        <S.Link
            href="#"
            onClick={() => scroll.scrollToTop({duration: settings.animation.scrollDuration})}
        ><b>zaytcev</b>com</S.Link>
    );
};
