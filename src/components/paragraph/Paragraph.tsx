import {S} from "./Paragraph_Styles";
import React from "react";

type ParagraphPropsType = {
    text: string,
}

export const Paragraph: React.FC<ParagraphPropsType> = (props: ParagraphPropsType) => {
    return (
        <S.Paragraph>{props.text}</S.Paragraph>
    );
};
