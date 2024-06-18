import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { CharacterModel } from '../../models/character-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-starwars',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.css'
})
export class StarwarsComponent {
  constructor(private _starwarsService:StarwarsService){}
  search:string = "R2";
  characterResult: CharacterModel = {} as CharacterModel;

  ngOnInit(){
    this.callApi();
  }


  callApi():void{
    this._starwarsService.getCharacter(this.search).subscribe((response:CharacterModel) => {
      console.log(response);
      this.characterResult = response;
    })
  }

}
