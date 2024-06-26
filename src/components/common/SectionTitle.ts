import styled from "styled-components";
import {fontSize} from "../../styles/Common";
import {settings} from "../../styles/settings";

type SectionTitlePropsType = {
    color?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${props => props.color || "#ffffff"};
    margin: 0 0 48px 0;
    padding: 0 0 0 28px;
    position: relative;
    text-transform: uppercase;
    
    ${fontSize({min: 24, max: 32})}
    
    &::before {
        content: "// ";
        display: inline-block;
        
        position: absolute;
        transform: translateX(-26px);
    }
    
    @media ${settings.media.desktop} {
        margin: 0 0 38px 0;
    }

    @media ${settings.media.desktopSmall} {
        margin: 0 0 28px 0;
    }
    
`
