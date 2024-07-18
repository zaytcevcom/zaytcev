import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from './Slider_Styles'
import otusMSA from "./../../assets/images/certificates/otus-msa.png";
import otusPatterns from "./../../assets/images/certificates/otus-patterns.png";
import otusGo from "./../../assets/images/certificates/otus-go.png";
import otusHighload from "./../../assets/images/certificates/otus-highload.png";

const items = [
    <S.Slide src={otusMSA} alt={"Microservice Architecture"}></S.Slide>,
    <S.Slide src={otusPatterns} alt={"Архитектура и шаблоны проектирования"}></S.Slide>,
    <S.Slide src={otusGo} alt={"Golang Developer. Professional"}></S.Slide>,
    <S.Slide src={otusHighload} alt={"Highload Architect"}></S.Slide>,
];


export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls={true}
        />
    </S.Slider>
);
