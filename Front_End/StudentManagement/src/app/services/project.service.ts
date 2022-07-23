import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  public createProject(project: any){
    return this._http.post(`${baseUrl}/user/createProject/`,project);
  }

  public addProjectFiles(files:any){
    return this._http.post(`${baseUrl}/user/addFiles/`,files);
  }

  public addMembers(members:any){
    return this._http.post(`${baseUrl}/user/addMembers/`,members);
  }

  public projectStatus(){
    return this._http.get(`${baseUrl}/user/project-status/`);
  }

  public projectFiles(){
    return this._http.get(`${baseUrl}/user/project-files/`);
  }

  public projectMembers(){
    return this._http.get(`${baseUrl}/user/project-members/`);
  }


}
