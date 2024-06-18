import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  currentUser:User = {} as User;
  isLoggedIn: boolean = false;
  getUser():User{
    return this.currentUser;
  }

  setUser(u:User) {
    this.currentUser = u;
    console.log(this.currentUser);
  }
  getLoggedIn():boolean{
    return this.isLoggedIn;
  }
  setLoggedIn(value:boolean):void{
    this.isLoggedIn = value;
  }

}
