import React from 'react';
import {S} from "./Header_Styles";
import {Container} from "../../components/common/Container";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Switch} from "./switch/Switch";

type HeaderPropsType = {
    switchHandle: () => void,
    switchChecked: boolean
}

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Logo/>
                    <Switch handle={props.switchHandle} checked={props.switchChecked} />
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
