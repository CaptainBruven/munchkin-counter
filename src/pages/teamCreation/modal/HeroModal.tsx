import { createEffect, createSignal } from 'solid-js'
import { Sex, type Hero } from '../../../utils/types'
import Modal from '../../../ui/Modal/Modal'

interface Props {
    hero: Hero | null
    open: boolean
    onSave: (hero: Hero) => void
    onCancel: () => void;
}

const HeroModal = (props: Props) => {
    const cleanHero: Hero = { id: -1, name: "", level: 1, color: "", sex: Sex.MALE, equipments: [], isAlive: true }
    const [hero, setHero] = createSignal(cleanHero)

    createEffect(() => {
        if (props.hero !== null) {
            setHero(props.hero)
        }
    })

    const handleClose = () => {
        setHero(cleanHero)
        props.onCancel()
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            title={props.hero !== null ? "Edit hero" : "Add new hero"}
        >
            <div>
                <input type="text" value={hero()?.name} />
            </div>
        </Modal>
    )
}

export default HeroModal