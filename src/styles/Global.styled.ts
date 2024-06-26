import {createGlobalStyle} from "styled-components";
import logo from "../assets/images/logo.png";
import {settings} from "./settings";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    
    *::selection {
        background: ${props => props.theme.gradient.second};
        color: #fff;
    }
    
    body {
        margin: 0;
        padding: 0;
        min-width: 360px;
        background: ${props => props.theme.background.primary};
    }
    
    a {
        text-decoration: none;
    }

    section {
        color: ${props => props.theme.color.primary};
        padding: 80px 0;

        position: relative;
        overflow: hidden;
        z-index: 0;

        &::before {
            content: "";
            min-width: 400px;
            min-height: 600px;
            background-image: url(${logo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;

            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-68%, -78%) rotate(18deg);
            opacity: 0.02;
            z-index: -1;
        }
        
        &::after {
            content: "";
            min-width: 400px;
            min-height: 600px;
            background-image: url(${logo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;

            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(40%, -28%) rotate(-18deg);
            opacity: 0.02;
            z-index: -1;
        }

        @media ${settings.media.desktop} {
            padding: 38px 0;
        }

        @media ${settings.media.desktopSmall} {
            padding: 28px 0;
        }
    }
    
    section:nth-of-type(odd) {
        background-color: ${props => props.theme.background.primary};
    }

    section:nth-of-type(even) {
         background: linear-gradient(
             ${props => props.theme.gradient.angle}, 
             ${props => props.theme.gradient.first} -11.32%, 
             ${props => props.theme.gradient.second} 109.99%
         );
        //background: linear-gradient(rgba(135, 60, 255, 0.4), rgba(135, 60, 255, 0.0) 80%), linear-gradient(-45deg, rgba(120, 155, 255, 0.9) 25%, rgba(255, 160, 65, 0.9) 75%);

        &::before {
            top: 0;
            transform: translate(-28%, 10%);
        }

        &::after {
            top: 0;
            transform: translate(70%, 70%) rotate(18deg);
        }
    }
`
