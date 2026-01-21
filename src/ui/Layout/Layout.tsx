import type { JSXElement } from 'solid-js'
import './style.css'
import Header from '../Header/Header';

interface Props {
    title: JSXElement;
    children: JSXElement;
}

const Layout = (props: Props) => {
    return (
        <div class="mc-layout">
            <Header>
                {props.title}
            </Header>
            <div class="mc-layout-content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout