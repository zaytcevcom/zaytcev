import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string
}
export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg
            width={props.width || "50px"}
            height={props.height|| "50px"}
            viewBox={props.viewBox || "0 0 50 50"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={props.color || "currentColor"}
        >
            <use xlinkHref={`${iconSprite}#${props.iconId}`} />
        </svg>
    );
};
