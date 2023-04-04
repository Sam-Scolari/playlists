import { JSX } from "solid-js";

export default function Icon(props: {
  class?: string;
  icon: JSX.Element;
  href?: string;
  onClick?: (e: MouseEvent) => void;
}) {
  return (
    <a href={props.href} onClick={props.onClick} class={`w-min ${props.class}`}>
      {props.icon}
    </a>
  );
}
