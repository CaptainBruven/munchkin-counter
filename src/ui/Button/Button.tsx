import type { JSXElement } from 'solid-js';
import './style.css';

interface Props {
    size?: 'small' | 'large';
    children: JSXElement;
    onClick?: (e: MouseEvent) => void;
    class?: string;
    variant?: 'primary' | 'outline' | 'danger';
}

const Button = (props: Props) => {


    return (
        <button class={`mc-button ${props.size || 'small'} ${props.class || ''} ${props.variant || 'primary'}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;