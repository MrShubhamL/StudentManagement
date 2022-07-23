import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private _login:LoginService, private _router: Router) { }

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
    this.isLoggedIn = this._login.isLoggedIn();
    this.user = this._login.getUser();
  }

  logoutMe(){
    this._login.logout();
    this.isLoggedIn = false;
    this._router.navigate(['login']);
  }

}
