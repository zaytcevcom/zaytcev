import styled from "styled-components";

const Education = styled.section`
    background: ${props => props.theme.background.tertiary} !important;
`

const About = styled.div`
`

const ParagraphGroup = styled.div`
    margin: 0;
    gap: 16px;
    display: flex;
    flex-direction: column;
`

export const S = {
    Education,
    About,
    ParagraphGroup,
}
