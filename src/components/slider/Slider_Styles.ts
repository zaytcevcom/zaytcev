import styled from "styled-components";

const Slider = styled.div`
    width: 100%;
    text-align: center;
`

const Slide = styled.img`
    max-width: 680px;
    width: 100%;
    padding: 0;
    margin: 8px 0;
    border-radius: 12px;
    background: ${props => props.theme.background.primary};
    box-shadow: 0 1px 4px rgba(18, 18, 18, 0.2);
    overflow: hidden;
`

export const S = {
    Slider,
    Slide
}
