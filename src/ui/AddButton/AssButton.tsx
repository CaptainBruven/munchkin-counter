
import type { JSXElement } from 'solid-js';
import './style.css'
import Button from '../Button/Button';

interface Props {
    onClick: () => void;
    title: JSXElement;
}

const AddButton = (props: Props) => {
    return (
        <Button onClick={props.onClick} class="add-button">
            <div class="add-button-icon">

            </div>
            <div class="add-button-title">
                {props.title}
            </div>
        </Button>
    )
}

export default AddButton