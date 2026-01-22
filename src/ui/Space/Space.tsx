import type { JSXElement } from 'solid-js';
import './style.css';

interface Props {
    children: JSXElement;
    direction?: 'row' | 'column';
    gap?: string;
}

const Space = (props: Props) => {
    return (
        <div class="space" style={{ "flex-direction": props.direction ?? 'row', "gap": props.gap ?? '1rem' }}>{props.children}</div>
    )
}

export default Space