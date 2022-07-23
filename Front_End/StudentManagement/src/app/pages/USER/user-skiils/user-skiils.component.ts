import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SkillService } from 'src/app/services/skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-skiils',
  templateUrl: './user-skiils.component.html',
  styleUrls: ['./user-skiils.component.css']
})
export class UserSkiilsComponent implements OnInit {
  file!:File;
  constructor(private _skill:SkillService,private _login: LoginService, ) { }
  
  skill = {
    category : "",
    skill : "",
    description : ""
  }
  
  ngOnInit(): void {
  }

  onChange(event:any){
    this.file = event.target.files[0];
  }

  onUpload(){
    console.log(this.file)
  }
  
  id:any = 0;
  formSubmit(){
    this._skill.addSkill(this.skill).subscribe(
      (data:any)=>{
        // alert("Successfull");
        Swal.fire({
          title: 'Project created successfully!',
          text: 'Your project is created successfull. Please kindly add further project deatils.',
          confirmButtonText:"OK"
        });
        this.skill.skill="";
        this.skill.description="";
        this.skill.category="";
      },
      (error)=>{
        alert("ERROR");
      }
    )

  }

}
