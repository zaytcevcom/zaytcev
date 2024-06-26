import React from 'react';
import { S } from './Link_Styles';
import {settings} from "../../../styles/settings";

export const Link: React.FC = () => {
    return (
        <S.Link
            to={"services"}
            smooth={true}
            duration={settings.animation.scrollDuration}
        >
            Выбрать услугу
        </S.Link>
    )
}
