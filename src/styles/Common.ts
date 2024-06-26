type FontSizePropsType = {
    min: number,
    max: number,
}

export const fontSize = ({min, max}: FontSizePropsType) => `
    font-size: calc( (100vw - 360px) / (1440 - 360) * (${max} - ${min}) + ${min}px );
`
