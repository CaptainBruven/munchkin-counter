import { createContext, useContext, type ParentProps, type Accessor, type Setter } from 'solid-js';
import { createSignal } from 'solid-js';
import type { Hero } from '../utils/types';

type HeroesContextValue = {
    heroes: Accessor<Hero[]>;
    setHeroes: Setter<Hero[]>;
    addHero: (hero: Hero) => void;
    updateHero: (hero: Hero) => void;
    removeHero: (id: number) => void;
};

const HeroesContext = createContext<HeroesContextValue>();

export const HeroesProvider = (props: ParentProps) => {
    const [heroes, setHeroes] = createSignal<Hero[]>([]);

    const addHero = (hero: Hero) => {
        setHeroes((prev) => [...prev, hero]);
    };

    const updateHero = (hero: Hero) => {
        setHeroes((prev) => prev.map((h) => h.id === hero.id ? hero : h));
    };

    const removeHero = (id: number) => {
        setHeroes((prev) => prev.filter((h) => h.id !== id));
    };

    return (
        <HeroesContext.Provider value={{ heroes, setHeroes, addHero, updateHero, removeHero }}>
            {props.children}
        </HeroesContext.Provider>
    );
};

export const useHeroes = () => {
    const context = useContext(HeroesContext);
    if (!context) {
        throw new Error('useHeroes must be used within a HeroesProvider');
    }
    return context;
};

export type { Hero };
