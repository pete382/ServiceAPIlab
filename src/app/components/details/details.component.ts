import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private _userService:UserService){}

  getLoggedIn():boolean{
    return this._userService.getLoggedIn();
  }

getUser():User{
    return this._userService.getUser();
  }

}
