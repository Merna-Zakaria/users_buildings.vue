export interface User {
    id: number;
    name: string;
    building_list: Array<string>;
}

export interface Building {
    id: string;
    building_name: string;
    user_name: string;
    building_info: object;
}

export interface Country {
    id: string;
    name: string;
    position: Array<number>;
}

export interface UserState {
    user?: User;
    users?: Array<User>;
    building?: Building;
    country?: Country;
    error: boolean;
}