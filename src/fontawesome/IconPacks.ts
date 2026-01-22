
// #region Imports
import { faHouse, faMars, faTrash, faVenus } from '@fortawesome/pro-duotone-svg-icons';
import FA from './Fontawesome';
import { Packs } from './Packs';

/**
 * Pack used for the sunkhronos library
 */
export const IconPacks = FA.createIconPack(
    Packs.IconPacks,
    faHouse,
    faMars,
    faVenus,
    faTrash,
);
