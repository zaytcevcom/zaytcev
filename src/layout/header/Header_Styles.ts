import styled from "styled-components";

const Header = styled.header`
    background: linear-gradient(
        ${props => props.theme.gradient.angle},
        ${props => props.theme.gradient.first} -11.32%,
        ${props => props.theme.gradient.second} 109.99%
    );
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 18px 0;
    box-shadow: 0 1px 4px rgba(18, 18, 18, 0.2);
`

export const S = {
    Header
}
