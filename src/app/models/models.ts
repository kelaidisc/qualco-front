export interface Country {
    id: number;
    name: string;
    area: number;
    countryCode2: string;
}

export interface Region {
    id: number;
    name: string;
}

export interface StatMax {
    name: string;
    countryCode3: string;
    year: number;
    population: number;
    gdp: number;
}

export interface ExploreRow {
    continentName: string;
    regionName: string;
    countryName: string;
    year: number;
    population: number;
    gdp: number;
}

export interface PageResult<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}
