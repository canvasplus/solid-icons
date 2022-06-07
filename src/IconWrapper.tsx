import type { JSXElement, JSX } from "solid-js/types";

// remove IntrinsicElements declaration 💫

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

export default function IconTemplate(
  iconSrc: IconTree,
  props: IconProps
): JSXElement {
  return (
    <svg
      stroke={iconSrc.a.stroke}
      fill="currentColor"
      strokeWidth="0"
      style={{
        ...props.style,
        overflow: "visible",
        color: props.color,
      }}
      {...iconSrc.a}
      {...props}
      height={props.size || "1em"}
      width={props.size || "1em"}
      innerHTML={iconSrc.c}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.title && <title>{props.title}</title>}
    </svg>
  );
}
