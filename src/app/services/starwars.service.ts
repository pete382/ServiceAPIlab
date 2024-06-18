import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CharacterModel } from '../models/character-model';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private http:HttpClient) { }
  getCharacter(character:string):Observable<CharacterModel>{
    return this.http.get<CharacterModel>(`https://swapi.py4e.com/api/people/?search=${character}`);
  }

}
