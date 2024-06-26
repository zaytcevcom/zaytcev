import styled from "styled-components";

const Services = styled.section``

interface CardProps {
    backgroundImage: string;
}

const Card = styled.div<CardProps>`
    background-color: ${props => props.theme.background.tertiary};
    border-radius: 8px;
    padding: 18px;
    width: 370px;
    flex-grow: 1;
    position: relative;

    &:hover {
        cursor: pointer;
        transition: 80ms;
        transform: scale(1.02);
    }
    
    &::after {
        content: "";
        min-width: 48px;
        min-height: 48px;
        position: absolute;
        top: 50%;
        right: 18px;

        filter: grayscale(100%);
        opacity: 0.4;
        
        background-image: url(${props => props.backgroundImage});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transform: translateY(-50%);
    }

    &:hover::after {
        filter: grayscale(0%);
        opacity: 1;
    }
`

const CardTitle = styled.p`
    font-weight: bold;
`

const CardPrice = styled.div`
    display: inline-block;
    margin: 12px 0 12px -18px;
    padding: 4px 12px 4px 18px;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(
            ${props => props.theme.gradient.angle},
            ${props => props.theme.gradient.first} -11.32%,
            ${props => props.theme.gradient.second} 109.99%
    );
    color: #fff;
`

const CardDescription = styled.p``

export const S = {
    Services,
    Card,
    CardTitle,
    CardPrice,
    CardDescription,
}
