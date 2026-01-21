import './style.css'
import type { RouteSectionProps } from '@solidjs/router';
import { LayoutProvider, useLayout } from './LayoutContext';

const LayoutContent = (props: RouteSectionProps) => {
    const { title } = useLayout();

    return (
        <div class="layout">
            <header class="layout-header">
                <span class="layout-title">{title()}</span>
                <span class="layout-team-toggle">Team</span>
            </header>
            <div class="layout-content">
                {props.children}
            </div>
        </div>
    );
};

const Layout = (props: RouteSectionProps) => {
    return (
        <LayoutProvider>
            <LayoutContent {...props} />
        </LayoutProvider>
    )
}

export default Layout