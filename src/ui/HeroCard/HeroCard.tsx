import type { Hero } from '../../utils/types'
import './style.css'

interface Props {
    hero: Hero
    onClick?: () => void;
}

const HeroCard = (props: Props) => {
    return (
        <div class="hero-card" style={{ "border-color": props.hero.color }} onClick={props.onClick}>
            <div class="hero-sex">

            </div>
            <div class="hero-name">
                {props.hero.name}
            </div>
            <div class="hero-delete">

            </div>
        </div>
    )
}

export default HeroCard