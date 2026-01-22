import FAIcon from '../../fontawesome/FAIcon';
import { Sex, type Hero } from '../../utils/types'
import Button from '../Button/Button';
import './style.css'

interface Props {
    hero: Hero
    onClick: () => void;
    onDelete: () => void;
}

const HeroCard = (props: Props) => {

    return (
        <div class="hero-card" style={{ "border-color": props.hero.color }} onClick={props.onClick}>
            <div class="hero-sex">
                {
                    props.hero.sex === Sex.MALE ?
                        <FAIcon prefix="fad" name="mars" color="var(--blue)" /> :
                        <FAIcon prefix="fad" name="venus" color="var(--pink)" />
                }
            </div>
            <div class="hero-name">
                {props.hero.name}
            </div>
            <div class="hero-delete" onClick={(e) => {
                e.stopPropagation();
                props.onDelete();
            }}>
                <FAIcon prefix="fad" name="trash" color="var(--red)" />
            </div>
        </div>
    )
}

export default HeroCard