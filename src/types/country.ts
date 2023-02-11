import {Region} from "./regions";

type Currency = {
    code: string;
    name: string;
    symbol: string;
};
type Language = {
    name: string;
    nativeName: string;
    iso639_1: string;
    iso639_2: string;
}

export type Country = {
    name: string;
    nativeName: string;
    flag: string;
    flags: {
        png: string ,
        svg: string,
    };
    region: Region;
    population: number;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    borders: string[];
    currencies: Currency[];
    languages: Language[];
}

export type CountryInfo = {
    img: string,
    name: string,
    info: Info[],
}

type Info = {
    title: string,
    description: string,
}
