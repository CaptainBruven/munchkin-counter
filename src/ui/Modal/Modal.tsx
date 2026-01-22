import { createSignal, createEffect, onCleanup, Show, type JSXElement, type ParentProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import './style.css';

interface Props extends ParentProps {
    open: boolean;
    title?: JSXElement;
    footer?: JSXElement;
    maskClosable?: boolean;
    onClose?: () => void;
}

const Modal = (props: Props) => {
    const [visible, setVisible] = createSignal(false);
    const [animating, setAnimating] = createSignal(false);

    createEffect(() => {
        if (props.open) {
            setVisible(true);
            setAnimating(true);
            requestAnimationFrame(() => {
                setAnimating(false);
            });
        } else if (visible()) {
            setAnimating(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setAnimating(false);
            }, 200);
            onCleanup(() => clearTimeout(timer));
        }
    });

    const handleMaskClick = () => {
        if (props.maskClosable !== false) {
            props.onClose?.();
        }
    };

    return (
        <Show when={visible()}>
            <Portal>
                <div
                    class={`modal-mask ${props.open && !animating() ? 'modal-mask-visible' : ''}`}
                    onClick={handleMaskClick}
                />
                <div
                    class={`modal-wrapper ${props.open && !animating() ? 'modal-open' : 'modal-closed'}`}
                >
                    <div class="modal-content" onClick={(e) => e.stopPropagation()}>
                        <Show when={props.title}>
                            <div class="modal-header">
                                {props.title}
                            </div>
                        </Show>
                        <div class="modal-body">
                            {props.children}
                        </div>
                        <Show when={props.footer}>
                            <div class="modal-footer">
                                {props.footer}
                            </div>
                        </Show>
                    </div>
                </div>
            </Portal>
        </Show>
    );
};

declare global {
    interface Window {
        __modalClickX?: number;
        __modalClickY?: number;
    }
}

export default Modal;
