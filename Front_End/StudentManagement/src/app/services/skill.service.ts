import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private _http: HttpClient) { }

  public addSkill(skill:any){
    return this._http.post(`${baseUrl}/user/skills/`,skill,{responseType:"arraybuffer"});
  }


}
