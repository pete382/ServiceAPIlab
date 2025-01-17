export interface CharacterModel {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  string;
    films:      string[];
    species:    string[];
    vehicles:   any[];
    starships:  any[];
    created:    Date;
    edited:     Date;
    url:        string;
}
