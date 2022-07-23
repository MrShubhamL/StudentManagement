import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _login:LoginService) { }

  public user = {
    firstName:'',
    middleName:'',
    lastName:'',
    gender:'',
    dob:'',
    contact:'',
    email:'',
    address:'',
    username:'',
    password:'',
  }

  ngOnInit(): void {
    this.user = this._login.getUser()
  }

}
