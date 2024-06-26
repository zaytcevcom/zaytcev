import React from 'react';
import {S} from "./Footer_Styles";
import {Container} from "../../components/common/Container";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {SocialLink} from "./socialLink/SocialLink";

const items = [
    {
        href: "https://t.me/zaytcev",
        iconId: "telegram",
        text: "zaytcev",
        viewBox: undefined
    },
    {
        href: "https://instagram.com/zaytcevcom",
        iconId: "instagram",
        text: "zaytcevcom",
        viewBox: undefined
    },
    {
        href: "https://github.com/zaytcevcom",
        iconId: "github",
        text: "zaytcevcom",
        viewBox: undefined
    },
    {
        href: "https://lo.ink/zaytcev",
        iconId: "lo",
        text: "zaytcev",
        viewBox: "0 0 38 38"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper gap={"20px"} align={"center"} justify={"space-between"}>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"flex-start"} gap={"8px"}>
                        <Logo/>
                        {items.map((item, index) => {
                            return <SocialLink
                                key={index}
                                href={item.href}
                                iconId={item.iconId}
                                text={item.text}
                                viewBox={item.viewBox}
                            />
                        })}
                    </FlexWrapper>
                    <S.LogoImage></S.LogoImage>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
