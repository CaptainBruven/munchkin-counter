import { createSignal } from 'solid-js';
import { useHeroes } from '../../contexts/HeroesContext';
import { useLayout } from '../../contexts/LayoutContext';
import AddButton from '../../ui/AddButton/AssButton';
import Card from '../../ui/Card/Card';
import HeroCard from '../../ui/HeroCard/HeroCard';
import Modal from '../../ui/Modal/Modal';
import { Sex, type Hero } from '../../utils/types';
import './style.css'
import Button from '../../ui/Button/Button';
import HeroModal from './modal/HeroModal';


const TeamCreation = () => {
    const layout = useLayout();
    const heroes = useHeroes();

    const [selectedHero, setSelectedHero] = createSignal<Hero | null>(null);
    const [heroModalOpen, setHeroModalOpen] = createSignal(false);

    layout.setTitle("Choose your team");
    heroes.addHero({ id: 1, name: "Luc", color: "#E78284", equipments: [], isAlive: true, level: 1, sex: Sex.MALE });

    const handleSaveHero = (hero: Hero) => {
        if (selectedHero()) {
            heroes.updateHero(hero)
        }
        else {
            heroes.addHero(hero)
        }
    }

    const handleDeleteHero = (hero: Hero) => {
        heroes.removeHero(hero.id)
    }

    return (
        <div class="heroes">
            <Card title="Your heroes">
                <div class="heroes-content">
                    <div class="heroes-list">
                        {heroes.heroes().map((hero) => (
                            <HeroCard
                                hero={hero}
                                onClick={() => {
                                    setSelectedHero(hero)
                                    setHeroModalOpen(true)
                                }}
                                onDelete={() => handleDeleteHero(hero)}
                            />
                        ))}
                    </div>
                    <AddButton title="Add a hero" onClick={() => setHeroModalOpen(true)} />
                </div>
            </Card>
            <HeroModal
                open={heroModalOpen()}
                hero={selectedHero()}
                onSave={(hero) => handleSaveHero(hero)}
                onCancel={() => {
                    setSelectedHero(null)
                    setHeroModalOpen(false)
                }}
            />

            {/* <Modal
                title={selectedHero() ? "Edit your hero" : "Add a new hero"}
                open={!!selectedHero()}
                onClose={() => setSelectedHero(null)}
                maskClosable={false}
                footer={
                    <>
                        <Button onClick={() => setSelectedHero(null)}>Cancel</Button>
                        <Button onClick={() => setSelectedHero(null)}>Save</Button>
                    </>
                }
            >

            </Modal> */}
        </div>
    )
}

export default TeamCreation