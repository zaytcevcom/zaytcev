import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: "row" | "row-reverse" | "column" | "column-reverse",
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "inherit" | "initial" | "unset",
    wrap?: "nowrap" | "wrap" | "wrap-reverse",
    gap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "wrap"};
    gap: ${props => props.gap || "0"};
`
