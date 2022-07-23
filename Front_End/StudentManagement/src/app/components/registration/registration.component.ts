import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, _SnackBarContainer } from '@angular/material/snack-bar';
import { SignupService } from 'src/app/services/signup.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email : new FormControl('', [Validators.required, Validators.email])
  })
  constructor(private _snackbar:MatSnackBar, private _signup: SignupService) { }
  spin = false;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

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
    this.spin = false;
  }

  formSubmit(){
    if(this.user.username == "" || this.user.password == ""){
      this.spin=false;
      this._snackbar.open("Username or Password is required!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    else{
      this.spin=true;
      this._signup.createUser(this.user).subscribe(
        (data:any)=>{
          this.spin=false;
          console.log(data);
          alert("Successfull");
        },
        (error:any)=>{
          this.spin= false;
          alert("Something went wrong!!");
        }
      )
    }
  }

}
