import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { IconName, IconPrefix, library } from "@fortawesome/fontawesome-svg-core";
import { faHorizontalRule } from "@fortawesome/pro-thin-svg-icons";
import { Packs } from "./Packs";

export interface IconPack {
    title: string;
    icons: Icon[];
}
interface Icon {
    definition: IconDefinition;
    getIdentifier: () => string;
}

class FontAwesome {
    static Packs: { [key: string]: IconPack; } = {};
    static Icons: Icon[] = [];

    static #initIconPack = (pack: IconPack) => library.add(...pack.icons.map(i => i.definition));

    static RegisterIconPack = (pack: IconPack) => {
        FontAwesome.Packs[pack.title] = pack;
        FontAwesome.Icons = [...FontAwesome.Icons, ...pack.icons];
        FontAwesome.#initIconPack(pack);
    };

    static createIconPack = (title: Packs, ...icons: IconDefinition[]): IconPack => {
        const pack: IconPack = {
            title: title.toString(),
            icons: []
        };

        icons.forEach(icon => {
            pack.icons.push({
                definition: icon,
                getIdentifier: () => `${icon.prefix} ${icon.iconName}`
            });
        });

        return pack;
    };

    static GetIcon = (prefix: string, name: string) => FontAwesome.Icons.find(i => i.getIdentifier() === `${prefix} ${name}`);
    static GetIconFromPack = (packName: Packs, prefix: string, name: string) => FontAwesome.Packs[packName]?.icons.find(i => i.getIdentifier() === `${prefix} ${name}`);
    static GetPack = (packName: Packs) => FontAwesome.Packs[packName];
    static GetNoneIcon = () => faHorizontalRule;
    static ConvertDBFieldToIcon = (fieldValue: string): { prefix: IconPrefix, iconName: IconName; } => {
        const [prefix, iconName] = fieldValue.split(" ");
        return {
            prefix: prefix as IconPrefix,
            iconName: iconName as IconName
        };
    };
}

export default FontAwesome;