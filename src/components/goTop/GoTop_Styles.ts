import styled from "styled-components";

const GoTop = styled.button`
    background-color: ${props => props.theme.background.primary};
    color: ${props => props.theme.color.primary};
    padding: 8px;
    position: fixed;
    right: 28px;
    bottom: 28px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    opacity: 0.8;
    box-shadow: 0 1px 4px rgba(18, 18, 18, 0.2);
    
    &:hover {
        opacity: 1;
        cursor: pointer;
        transition: 180ms;
    }
`

export const S = {
    GoTop,
}
