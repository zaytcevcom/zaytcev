import styled from "styled-components";

const Paragraph = styled.p`
    position: relative;
    padding: 4px 0 4px 8px;
    font-size: 15px;
    display: flex;
    align-items: center;
    
    &::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 100%;
        background: linear-gradient(
            90deg,
            ${props => props.theme.gradient.first} 5%,
            ${props => props.theme.gradient.second} 90%
        );
        
        position: absolute;
        transform: translateX(-8px);
    }
`

export const S = {
    Paragraph
}
