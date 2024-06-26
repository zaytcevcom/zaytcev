import styled from "styled-components";
import {Link as ReactScrollLink} from "react-scroll";

const Link = styled(ReactScrollLink)`
    text-transform: uppercase;
    background-color: #fff;
    font-size: 14px;
    border-radius: 18px;
    padding: 8px 16px;
    border: 0;
    
    &:hover {
        cursor: pointer;
    }
`

export const S = {
    Link
}
