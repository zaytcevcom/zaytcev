import React from 'react';
import {S} from '../Works_Styles'
import {useTheme} from "styled-components";

type WorkPropsType = {
    title: string,
    description: string,
    src?: string,
    backgroundFirst?: string,
    backgroundSecond?: string,
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    const theme = useTheme();

    if (!props.src) {
        return (
            <S.Card>
                <S.CardFilling
                    backgroundFirst={props.backgroundFirst || theme.gradient.first}
                    backgroundSecond={props.backgroundSecond || theme.gradient.second}
                >
                    {props.title}
                </S.CardFilling>
                <S.CardTitle>{props.title}</S.CardTitle>
                <S.CardDescription>{props.description}</S.CardDescription>
            </S.Card>
        );
    }

    return (
        <S.Card>
            <S.CardImage src={props.src} alt={props.title} />
            <S.CardTitle>{props.title}</S.CardTitle>
            <S.CardDescription>{props.description}</S.CardDescription>
        </S.Card>
    );
};
