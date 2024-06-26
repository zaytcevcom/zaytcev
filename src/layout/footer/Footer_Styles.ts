import styled from "styled-components";
import logo from "./../../assets/images/logo.png";

const Footer = styled.footer`
    background: linear-gradient(
        ${props => props.theme.gradient.angle}, 
        ${props => props.theme.gradient.first} -11.32%, 
        ${props => props.theme.gradient.second} 109.99%
    );
    padding: 20px 0;
`

const LogoImage = styled.div`
    min-height: 200px;
    min-width: 160px;
    background: url(${logo}) no-repeat;
    background-size: contain;
`

const SocialLink = styled.a`
    text-decoration: none;
    color: #fff;
    transition: 0.2s;
    
    &:hover {
        transform: scale(1.2);
    }
`

export const S = {
    Footer,
    LogoImage,
    SocialLink
}
