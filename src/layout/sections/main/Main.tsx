import React from 'react';
import photo from "../../../assets/images/photo.jpeg";
import {S} from './Main_Styles'
import {Paragraph} from "../../../components/paragraph/Paragraph";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {Fade} from "react-awesome-reveal";

const items = [
    "Проектирую, разрабатываю и внедряю CRM и ERP системы",
    "Backend-архитектор в цифровом мире LO.ink",
    "Основатель сервисов: GrabSu, SocModer, Лайкинг"
];

const socials = [
    {
        href: "https://t.me/zaytcev",
        iconId: "telegram",
        viewBox: "0 0 24 24"
    },
    {
        href: "https://instagram.com/zaytcevcom",
        iconId: "instagram",
        viewBox: "0 0 24 24"
    },
    {
        href: "https://github.com/zaytcevcom",
        iconId: "github",
        viewBox: "0 0 24 24"
    },
    {
        href: "https://lo.ink/zaytcev",
        iconId: "lo",
        viewBox: "0 0 38 38"
    },
]

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"40px"}>
                    <S.Photo src={photo} alt="Константин Зайцев"/>
                    <S.About>
                        <S.Title>Константин Зайцев</S.Title>
                        <S.SubTitle>web-developer</S.SubTitle>
                        <S.ParagraphGroup>
                            <Fade cascade={true} damping={0.28} triggerOnce={true}>
                                {items.map((item, index) => {
                                    return <Paragraph
                                        key={index}
                                        text={item}
                                    />
                                })}
                            </Fade>
                        </S.ParagraphGroup>
                        <S.Socials>
                            <FlexWrapper align={"center"} gap={"12px"}>
                                Обратная связь:
                                {socials.map((item, index) => {
                                    return <S.SocialLink href={item.href} target={"_blank"} key={index}>
                                        <Icon
                                            iconId={item.iconId}
                                            width={"20px"}
                                            height={"20px"}
                                            viewBox={item.viewBox}
                                        />
                                    </S.SocialLink>
                                })}
                            </FlexWrapper>
                        </S.Socials>
                    </S.About>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
