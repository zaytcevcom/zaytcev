import React from 'react';
import {Main} from "../layout/sections/main/Main";
import {Works} from "../layout/sections/works/Works";
import {Services} from "../layout/sections/services/Services";
import {Education} from "../layout/sections/education/Education";

export const MainPage: React.FC = () => {
    return (
        <>
            <Main/>
            <Works/>
            <Services/>
            <Education/>
        </>
    );
};
