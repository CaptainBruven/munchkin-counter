import { splitProps } from 'solid-js';
import type { JSX } from 'solid-js';
import { IconName, IconPrefix } from "@fortawesome/pro-regular-svg-icons";
import FontAwesome from './Fontawesome';
import { Packs } from './Packs';

// eslint-disable-next-line @typescript-eslint/ban-types
type TypeOrString<T> = T | (string & {});

export interface FAIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
    pack?: Packs;
    prefix: TypeOrString<IconPrefix>;
    name: TypeOrString<IconName>;
    size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x';
}

const sizeMap: Record<string, string> = {
    'xs': '0.75em',
    'sm': '0.875em',
    'lg': '1.25em',
    'xl': '1.5em',
    '2xl': '2em',
    '1x': '1em',
    '2x': '2em',
    '3x': '3em',
    '4x': '4em',
    '5x': '5em',
};

const FAIcon = (props: FAIconProps) => {
    const [local, svgProps] = splitProps(props, ['pack', 'prefix', 'name', 'size']);

    const icon = () => local.pack
        ? FontAwesome.GetIconFromPack(local.pack, local.prefix, local.name)
        : FontAwesome.GetIcon(local.prefix, local.name);

    const iconDef = () => icon()?.definition;

    const width = () => iconDef()?.icon[0] ?? 512;
    const height = () => iconDef()?.icon[1] ?? 512;
    const pathData = () => iconDef()?.icon[4];

    const fontSize = () => local.size ? sizeMap[local.size] || '1em' : '1em';

    const renderPaths = () => {
        const data = pathData();
        if (!data) return <text x="50%" y="50%" text-anchor="middle" font-size="12">?</text>;

        if (Array.isArray(data)) {
            return data.map((d, i) => (
                <path d={d} opacity={i === 0 ? 0.4 : 1} />
            ));
        }
        return <path d={data} />;
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width()} ${height()}`}
            fill="currentColor"
            style={{ width: fontSize(), height: fontSize() }}
            {...svgProps}
        >
            {renderPaths()}
        </svg>
    );
};

export default FAIcon;