import { For, createEffect, createSignal, type JSXElement } from 'solid-js';
import './style.css';

type SegmentedOption<T> = {
    label: JSXElement;
    value: T;
};

interface Props<T> {
    options: SegmentedOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

const Segmented = <T,>(props: Props<T>) => {
    const [thumbStyle, setThumbStyle] = createSignal<{ left: string; width: string }>({ left: '0', width: '0' });
    let containerRef: HTMLDivElement | undefined;

    const selectedIndex = () => {
        const idx = props.options.findIndex((opt) => opt.value === props.value);
        return idx >= 0 ? idx : 0;
    };

    const updateThumb = () => {
        if (!containerRef) return;
        const items = containerRef.querySelectorAll('.segmented-item');
        const item = items[selectedIndex()] as HTMLElement | undefined;
        if (item) {
            setThumbStyle({
                left: `${item.offsetLeft}px`,
                width: `${item.offsetWidth}px`,
            });
        }
    };

    createEffect(() => {
        selectedIndex();
        updateThumb();
    });

    const handleClick = (option: SegmentedOption<T>) => {
        props.onChange?.(option.value);
    };

    return (
        <div class="segmented" ref={containerRef}>
            <div class="segmented-thumb" style={thumbStyle()} />
            <For each={props.options}>
                {(option, index) => (
                    <div
                        class={`segmented-item ${index() === selectedIndex() ? 'segmented-item-selected' : ''}`}
                        onClick={() => handleClick(option)}
                    >
                        {option.label}
                    </div>
                )}
            </For>
        </div>
    );
};

export default Segmented;