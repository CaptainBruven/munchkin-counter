import { createContext, useContext, type ParentProps, type Accessor, type Setter, type JSXElement } from 'solid-js';
import { createSignal } from 'solid-js';

type LayoutContextValue = {
    title: Accessor<JSXElement>;
    setTitle: Setter<JSXElement>;
    showTeam: Accessor<boolean>;
    setShowTeam: Setter<boolean>;
};

const LayoutContext = createContext<LayoutContextValue>();

export const LayoutProvider = (props: ParentProps) => {
    const [title, setTitle] = createSignal<JSXElement>(null);
    const [showTeam, setShowTeam] = createSignal<boolean>(false);

    return (
        <LayoutContext.Provider value={{ title, setTitle, showTeam, setShowTeam }}>
            {props.children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};
