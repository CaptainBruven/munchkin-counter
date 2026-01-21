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
    const [transformOrigin, setTransformOrigin] = createSignal('center center');

    createEffect(() => {
        if (props.open) {
            const mouseX = window.__modalClickX ?? window.innerWidth / 2;
            const mouseY = window.__modalClickY ?? window.innerHeight / 2;
            setTransformOrigin(`${mouseX}px ${mouseY}px`);
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
                    style={{ "transform-origin": transformOrigin() }}
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

export const captureModalClick = (e: MouseEvent) => {
    (window as any).__modalClickX = e.clientX;
    (window as any).__modalClickY = e.clientY;
};

declare global {
    interface Window {
        __modalClickX?: number;
        __modalClickY?: number;
    }
}

export default Modal;
