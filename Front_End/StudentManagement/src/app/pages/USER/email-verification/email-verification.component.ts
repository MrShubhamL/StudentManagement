import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private _signup:SignupService,private _login:LoginService,private _route:Router) { }

  ngOnInit(): void {
  }

  myOtp = {
    otp:''
  }

  formSubmit(){
    alert("Verify..")
    this._signup.verifyOTP(this.myOtp.otp).subscribe(
      (data:any)=>{
        // alert("Successfull");
        this._route.navigate(['user-dashboard/home'])
        this._login.loginStatusSubject.next(true);
      },
      (error:any)=>{
        alert("OTP is not verified successfully!! PLease try again.");
      }
    )
  }

}
