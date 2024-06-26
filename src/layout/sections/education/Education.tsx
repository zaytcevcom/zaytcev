import React from 'react';
import {S} from './Education_Styles'
import {Paragraph} from "../../../components/paragraph/Paragraph";
import {Container} from "../../../components/common/Container";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Slider} from "../../../components/slider/Slider";
import {useTheme} from "styled-components";
import { Fade } from 'react-awesome-reveal';

const items = [
    "В 2020 году получил диплом магистра с отличием в Московском автомобильно-дорожном государственном техническом университете (МАДИ) по направлению подготовки «Информатика и вычислительная техника» по специальности «Банки и базы данных».",
    "Автор 7 научных статей в области разработки CRM-систем, систем дистанционного обучения и организации цифрового рабочего пространства.",
    "Всегда стремлюсь к совершенствованию, постоянно изучаю новые технологии и повышаю свою квалификацию."
];

export const Education: React.FC = () => {
    const theme = useTheme();

    return (
        <S.Education>
            <Container>
                <Fade triggerOnce={true} direction={"left"}>
                    <SectionTitle color={theme.color.primary}>Образование</SectionTitle>
                </Fade>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"20px"}>
                    <S.About>
                        <S.ParagraphGroup>
                            <Fade cascade={true} damping={0.18} triggerOnce={true}>
                                {items.map((item, index) => {
                                    return <Paragraph
                                        key={index}
                                        text={item}
                                    />
                                })}
                            </Fade>
                        </S.ParagraphGroup>
                    </S.About>
                    <Slider></Slider>
                </FlexWrapper>
            </Container>
        </S.Education>
    );
};

