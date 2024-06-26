import React from 'react';
import { FlexWrapper } from '../../../components/common/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {S} from "../Footer_Styles";

type SocialLinkPropsType = {
    href: string,
    iconId: string,
    text: string,
    viewBox?: string,
}
export const SocialLink: React.FC<SocialLinkPropsType> = (props: SocialLinkPropsType) => {
    return (
        <S.SocialLink href={props.href} target={"_blank"}>
            <FlexWrapper align={"center"} gap={"8px"}>
                <Icon
                    width="20px"
                    height="20px"
                    iconId={props.iconId}
                    viewBox={props.viewBox || "0 0 24 24"}
                />
                {props.text}
            </FlexWrapper>
        </S.SocialLink>
    );
};
