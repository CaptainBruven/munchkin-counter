import type { JSXElement } from 'solid-js';
import './style.css';

interface Props {
    size?: 'small' | 'large';
    children: JSXElement;
    onClick?: () => void;
    class?: string;
}

const Button = (props: Props) => {


    return (
        <button class={`mc-button ${props.size || 'small'} ${props.class || ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;