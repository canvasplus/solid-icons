import type { JSXElement, JSX } from "solid-js/types";
export interface IconTree {
    a: {
        [key: string]: string;
    };
    c: string;
}
export interface IconProps extends JSX.SvgSVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    style?: object;
    className?: string;
    viewBox?: string;
}
export interface IconBaseProps extends IconProps {
    src: IconTree;
}
export declare type IconTypes = (props: IconProps) => JSXElement;
export default function IconTemplate(iconSrc: IconTree, props: IconProps): JSXElement;
