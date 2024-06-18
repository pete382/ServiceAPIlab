import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _userService:UserService){}

  uName:string = "";
  password:string = "";

  login(){
    let u:User = {
      username: this.uName,
      password: this.password
    };
    this._userService.setUser(u);
    this._userService.setLoggedIn(true);
  }

  
}
