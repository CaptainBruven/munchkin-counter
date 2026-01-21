export enum Sex {
    MALE = 0,
    FEMALE = 1
}

export enum EquipmentType {
    WEAPON = 0,
    ARMOR = 1,
    SHIELD = 2,
    RING = 3,
    AMULET = 4
}

export type Hero = {
    id: number;
    name: string;
    level: number;
    color: string;
    sex: Sex;
    equipments: Equipment[];
    isAlive: boolean;
}

export type Equipment = {
    id: number;
    type: EquipmentType;
    power: number;
    additionalPower: number;
}