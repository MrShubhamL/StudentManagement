import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackbar:MatSnackBar, private login:LoginService, private router:Router) { }
  spin=false;

  ngOnInit(): void {
    this.spin = false;
  }

  public userLogin = {
    username: '',
    password: ''
  }

  formSubmit(){
    if(this.userLogin.username=="" || this.userLogin.username==null){
      this._snackbar.open("Username is required!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
        return;
    }
    else{
      this.spin = true;
      this.login.generateToken(this.userLogin).subscribe(
        (data:any)=>{
          console.log(data);
          this.login.loginUser(data.token);
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              console.log(user);
              if(this.login.getUserRole()=="ADMIN"){
                this.router.navigate(['admin-dashboard/home']);
                this.login.loginStatusSubject.next(true);
              }
              else if(this.login.getUserRole()=="STUDENT"){
                if(this.login.isEnabled() == false){
                  this.router.navigate(['email-verification'])
                }
                else{
                  this.router.navigate(['user-dashboard/home']);
                  this.login.loginStatusSubject.next(true);
                }
              }
              else{
                // Logout user
                this.login.logout();
                this._snackbar.open("Invalid Credentials!! Please enter correct details","",{
                  duration:this.durationInSeconds * 1000,
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                });
              }
            }
            )
          },
          (error:any)=>{
            this.spin= false;
            console.log(error)
            this.login.logout();
            this._snackbar.open("Invalid Credentials!! Please enter correct details","",{
              duration:this.durationInSeconds * 1000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            // window.location.reload()
        }
      )
    }
  }

}
