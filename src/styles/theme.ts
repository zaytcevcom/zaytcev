import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        background: {
            primary: string,
            secondary: string,
            tertiary: string,
        },
        color: {
            primary: string,
        },
        gradient: {
            angle: string
            first: string,
            second: string,
        },
    }
}

export const darkTheme: DefaultTheme = {
    background: {
        primary: '#252525',
        secondary: '#4D4D4D',
        tertiary: '#1c1c1c',
    },
    color: {
        primary: '#ffffff',
    },
    gradient: {
        angle: '45deg',
        first: '#4568DC',
        second: '#B06AB3',
    },
}

export const lightTheme: DefaultTheme = {
    background: {
        primary: '#ffffff',
        secondary: '#252525',
        tertiary: '#F4F6FA',
    },
    color: {
        primary: '#252525',
    },
    gradient: {
        angle: '45deg',
        first: '#4568DC',
        second: '#B06AB3',
    }
}
