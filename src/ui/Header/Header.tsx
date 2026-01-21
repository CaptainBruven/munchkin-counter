import type { JSXElement } from 'solid-js';
import './style.css';

interface Props {
    children: JSXElement;
}

const Header = (props: Props) => {
    return (
        <div class="mc-header">
            {props.children}
        </div>
    )
}

export default Header