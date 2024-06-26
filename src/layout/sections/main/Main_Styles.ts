import styled from "styled-components";
import {fontSize} from "../../../styles/Common";
import {settings} from "../../../styles/settings";

const Main = styled.section`
    display: flex;
    background: ${props => props.theme.background.primary};
`

const Photo = styled.img`
    margin: 18px;
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 50%;
    
    @media ${settings.media.mobile} {
        width: 300px;
        height: 300px;
    }
`

const About = styled.div`
    flex-grow: 2;
`
const Title = styled.h2`
    ${fontSize({min: 24, max: 38})}
    font-weight: bold;
    margin-bottom: 8px;
`
const SubTitle = styled.h1`
    ${fontSize({min: 16, max: 18})}
    font-weight: bold;
    text-transform: lowercase;
    background: linear-gradient(
        45deg,
        ${props => props.theme.gradient.first} 22%,
        ${props => props.theme.gradient.second} 66%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
`

const ParagraphGroup = styled.div`
    margin: 32px 0;
    gap: 16px;
    display: flex;
    flex-direction: column;
`

const Socials = styled.div`
    background-color: ${props => props.theme.background.tertiary};
    padding: 12px;
    border-radius: 8px;
`

const SocialLink = styled.a`
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
    
    &:hover {
        transform: scale(1.2);
    }
`

export const S = {
    Main,
    Photo,
    About,
    Title,
    SubTitle,
    ParagraphGroup,
    Socials,
    SocialLink
}
