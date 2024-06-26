import React from 'react';
import {S} from "../Services_Styles";

type ServicePropsType = {
    title: string,
    price: number,
    description: string,
    src: string
}
export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {
    return (
        <S.Card backgroundImage={props.src}>
            <S.CardTitle>{props.title}</S.CardTitle>
            <S.CardPrice>{props.price} ₽</S.CardPrice>
            <S.CardDescription>{props.description}</S.CardDescription>
        </S.Card>
    );
};
