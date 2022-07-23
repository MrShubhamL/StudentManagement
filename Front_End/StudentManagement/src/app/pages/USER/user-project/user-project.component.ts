import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css']
})
export class UserProjectComponent implements OnInit {
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _projectService:ProjectService,private _snackbar:MatSnackBar) { }

  file!:File;
  onChange(event:any){
    this.file = event.target.files[0].name;
    this.projectFile.fileName = this.file;
  }
  
  project = {
    projectTitle:'',
    projectDescription:'',
    startDate:'',
    endDate:''
  }
  
  
  projectFile = {
    fileName:this.file,
    description:''
  }

  groupMemeber = {
    memberName :"",
    memberContact :"",
    memberPRNNumber:"",
    memberEmail:""
  }
  
  ngOnInit(): void {
  }
  
  projectSubmit(){
    if(this.project.projectTitle == '' || this.project.projectDescription == '' || 
    this.project.projectTitle == null || this.project.projectDescription == null){
      this._snackbar.open("All project deatils are required!!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
        return;
    }
    else{
      this._projectService.createProject(this.project).subscribe(
        (data:any)=>{
          // alert("Successfull...");
          Swal.fire({
            title: 'Project created successfully!',
            text: 'Your project is created successfull. Please kindly add further project deatils.',
            confirmButtonText:"OK"
          })
          this.project.projectTitle = "";
          this.project.projectDescription = "";
          this.project.startDate = "";
          this.project.endDate = "";
        },
        (error:any)=>{
          // alert("Failed...")
          Swal.fire({
            title: 'Information',
            text: 'Youb have already created one project! (Project Limit is over)',
            confirmButtonText:"Exit"
          });
          this.project.projectTitle = "";
          this.project.projectDescription = "";
          this.project.startDate = "";
          this.project.endDate = "";
        }
      )
    }

  }

  fileSubmit(){
    this._projectService.addProjectFiles(this.projectFile).subscribe(
      (data:any)=>{
        if(this.projectFile.fileName == null || this.projectFile.description == ""){
          this._snackbar.open("All project file details are required!!","",{
            duration:this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
            return;
        }else{
          Swal.fire({
            title: 'Full Screen Warning!',
            text: 'Please don not exit from Full-Screen mode!!',
            confirmButtonText:"Full Screen"
          })
        }
      },
      (error:any)=>{
        alert("Failed...")

      }
    )
  }

  memeberSubmit(){
    if(this.groupMemeber.memberName == "" || this.groupMemeber.memberContact == "" ||
    this.groupMemeber.memberPRNNumber == "" || this.groupMemeber.memberEmail == ""){
      this._snackbar.open("All project members details are required!!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
        return;
    }
    else{
      this._projectService.addMembers(this.groupMemeber).subscribe(
        (data:any)=>{
          Swal.fire({
            title : "Member Successfully Added!!",
            text : "Group member is added successfully in your project.",
            confirmButtonText:"OK"
          });
          this.groupMemeber.memberName = "";
          this.groupMemeber.memberContact = "";
          this.groupMemeber.memberEmail = "";
          this.groupMemeber.memberPRNNumber = "";
        },
        (error:any)=>{
          this._snackbar.open("This Student is already added in your group!!","",{
            duration:this.durationInSeconds * 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
            return;
        }
      )
    }
  }




}
