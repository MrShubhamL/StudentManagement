import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent implements OnInit {
  
  constructor(private _project:ProjectService) { }
  
  
  project = {
    projectTitle:'',
    projectDescription:'',
    startDate:'',
    endDate:''
  }
  
  folders = [
    {
      fileName:'',
      description:'',
      date:''
    }
    
  ]

  student = [
    {
      memberName:'',
      memberContact:'',
      memberPRNNumber:'',
      memberEmail:'',
      memberID:''
    }
  ]

  ngOnInit(): void {
    this._project.projectStatus().subscribe(
    (data:any)=>{
      this.project = data;
    },
    (error:any)=>{
      alert("Something wents wrong..!!")
    }
    )

    this._project.projectFiles().subscribe(
      (data:any)=>{
        this.folders = data;
      },
      (error:any)=>{
        alert("Something wents wrong..!!")
      }
    )

    this._project.projectMembers().subscribe(
      (data:any)=>{
        this.student = data;
        console.log(this.student)
      },
      (error:any)=>{
        alert("Error...")
      }
    )
  }



}