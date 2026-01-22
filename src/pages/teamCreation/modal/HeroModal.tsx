import { createEffect, createSignal } from 'solid-js'
import { Sex, type Hero } from '../../../utils/types'
import Modal from '../../../ui/Modal/Modal'
import Space from '../../../ui/Space/Space'
import Button from '../../../ui/Button/Button'
import TextInput from '../../../ui/Input/TextInput/TextInput'
import Segmented from '../../../ui/Segmented/Segmented'
import FAIcon from '../../../fontawesome/FAIcon'

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

    const handleSave = () => {
        props.onSave(hero())
        handleClose()
    }

    const sexOptions = [
        { label: (<div class="segmented-hero-sex"><FAIcon prefix="fad" name="mars" color="var(--blue)" /> Male</div>), value: Sex.MALE },
        { label: (<div class="segmented-hero-sex"><FAIcon prefix="fad" name="venus" color="var(--pink)" /> Female</div>), value: Sex.FEMALE }
    ]

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            title={props.hero !== null ? "Edit hero" : "Add new hero"}
            maskClosable={false}
            footer={
                <Space>
                    <Button variant='outline' onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </Space>
            }
        >
            <div style={{ display: 'flex', "flex-direction": 'column', gap: '1rem' }}>
                <Segmented
                    options={sexOptions}
                    value={hero().sex}
                    onChange={(e) => setHero({ ...hero(), sex: e })}
                />
                <TextInput
                    value={hero().name}
                    placeholder={'Hero name'}
                    onChange={(value) => setHero({ ...hero(), name: value })}
                />
            </div>
        </Modal>
    )
}

export default HeroModal