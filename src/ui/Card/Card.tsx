import type { JSXElement } from 'solid-js';
import './styles.css';

interface Props {
    children: JSXElement;
    title?: JSXElement;
    depth?: number;
}

const Card = (props: Props) => {

    return (
        <div class='mc-card' style={{ background: `var(--background-${(props.depth || 1) + 1 || 2})` }}>
            {
                props.title ? (
                    <div class="mc-card-title">
                        {props.title}
                    </div>
                ) : null
            }
            <div class="mc-card-content">
                {props.children}
            </div>
        </div>
    )
}

export default Card