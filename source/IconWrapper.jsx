export default function IconTemplate(iconSrc, props) {
    return (<svg stroke={iconSrc.a.stroke} fill="currentColor" strokeWidth="0" style={{
            ...props.style,
            overflow: "visible",
            color: props.color,
        }} {...iconSrc.a} {...props} height={props.size || "1em"} width={props.size || "1em"} innerHTML={iconSrc.c} xmlns="http://www.w3.org/2000/svg">
      {props.title && <title>{props.title}</title>}
    </svg>);
}
