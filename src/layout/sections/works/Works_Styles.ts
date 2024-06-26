import styled from "styled-components";
import {settings} from "../../../styles/settings";
import {fontSize} from "../../../styles/Common";

const Works = styled.section``

const Card = styled.div`
    background: ${props => props.theme.background.primary};
    border-radius: 8px;
    padding: 28px 8px;
    transition: 40ms;
    text-align: center;

    flex-grow: 1;
    max-width: 100%;
    min-width: 220px;
    
    &:nth-child(12n + 1) {
        width: 24%;
    }

    &:nth-child(12n + 2) {
        width: 24%;
    }

    &:nth-child(12n + 3) {
        width: 48%;
    }

    &:nth-child(12n + 4) {
        width: 24%;
    }

    &:nth-child(12n + 5) {
        width: 48%;
    }

    &:nth-child(12n + 6) {
        width: 24%;
    }

    &:nth-child(12n + 7) {
        width: 48%;
    }

    &:nth-child(12n + 8) {
        width: 24%;
    }

    &:nth-child(12n + 9) {
        width: 24%;
    }

    &:nth-child(12n + 10) {
        width: 24%;
    }

    &:nth-child(12n + 11) {
        width: 48%;
    }

    &:nth-child(12n + 12) {
        width: 24%;
    }
    
    &:hover {
        cursor: pointer;
        transition: 80ms;
        transform: scale(1.01);
    }
    
    @media ${settings.media.desktopSmall} {
        & {
            width: 48% !important;
        }
    }
`

interface CardFillingProps {
    backgroundFirst: string;
    backgroundSecond: string;
}

const CardFilling = styled.div<CardFillingProps>`

    min-height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-shadow: 0 1px 4px rgba(118, 118, 118, 0.1);
    ${fontSize({min: 24, max: 36})}
    font-weight: 500;
    text-transform: uppercase;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        border-radius: 49% 21% 40% 22% / 39% 25% 51% 25%;
        background: ${props => props.backgroundFirst};
        width: 96%;
        height: 160px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(8deg);
        opacity: 0.5;
        z-index: -1;

        @media ${settings.media.desktopSmall} {
            width: 60%;
        }

        @media ${settings.media.tablet} {
            width: 76%;
        }
    }

    &::after {
        content: "";
        position: absolute;
        border-radius: 49% 21% 40% 22% / 39% 25% 51% 25%;
        background: ${props => props.backgroundSecond};
        width: 96%;
        height: 160px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-2deg);
        opacity: 0.5;
        z-index: -1;

        @media ${settings.media.desktopSmall} {
            width: 60%;
        }

        @media ${settings.media.tablet} {
            width: 76%;
        }
    }
`

const CardImage = styled.img`
    max-height: 160px;
    max-width: 100%;
    object-fit: cover;
    border-radius: 18px;
`

const CardTitle = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    margin: 18px 0;
`

const CardDescription = styled.p`
    text-align: center;
`

export const S = {
    Works,
    Card,
    CardFilling,
    CardImage,
    CardTitle,
    CardDescription
}
