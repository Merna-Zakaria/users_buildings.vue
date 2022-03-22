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
    geojson: object
}

export interface CountriesGeojson {
    type: string;
    features: []
}


export interface UserState {
    user?: User;
    users?: Array<User>;
    building?: Building;
    country?: Country;
    countries?: Array<Country>;
    error: boolean;
    CountriesGeojson: CountriesGeojson;
}