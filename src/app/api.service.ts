import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable  } from 'rxjs';
import { Pages } from './pages.model';



const baseUrl = 'http://batu.voahbeild.nl/wp-json/';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  
  constructor(private http: HttpClient) { }

  getToken(loginCredentials: any): Observable<any> {
    return this.http.get(`${baseUrl}/jwt-auth/v1/token`, loginCredentials);
  }
  validate(token: string): Observable<any> {
    return this.http.post(`${baseUrl}/jwt-auth/v1/token/validate`, token);
  }
  
   getPages():Observable<Pages[]>{
    return this.http.get<Pages[]>(`${baseUrl}wp/v2/pages`); 
  }
  getPage(id:any):Observable<Pages>{
    return this.http.get<Pages>(`${baseUrl}wp/v2/pages/${id}`); 
  }
  findByTitle(title: any): Observable<any>{
    return this.http.get(`${baseUrl}?title=${title}`);
  }
  update(id: any, data: any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYXR1LnZvYWhiZWlsZC5ubCIsImlhdCI6MTYzNjQ1NDAxOSwibmJmIjoxNjM2NDU0MDE5LCJleHAiOjE2MzcwNTg4MTksImRhdGEiOnsidXNlciI6eyJpZCI6IjMifX19.xXFszTabc6gbbBNuEQw_G6IV4ezwJ9xiPthNLt3XDhw'});
    let options = {headers: headers};
    return this.http.post(`${baseUrl}wp/v2/pages/${id}`, data,options);
  }

  createPage(page: any){
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYXR1LnZvYWhiZWlsZC5ubCIsImlhdCI6MTYzNjQ1NDAxOSwibmJmIjoxNjM2NDU0MDE5LCJleHAiOjE2MzcwNTg4MTksImRhdGEiOnsidXNlciI6eyJpZCI6IjMifX19.xXFszTabc6gbbBNuEQw_G6IV4ezwJ9xiPthNLt3XDhw'});
    let options = {headers: headers};
    return this.http.post<Pages[]>(`${baseUrl}wp/v2/pages`,page, options);
  }
  delete(id:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYXR1LnZvYWhiZWlsZC5ubCIsImlhdCI6MTYzNjQ1NDAxOSwibmJmIjoxNjM2NDU0MDE5LCJleHAiOjE2MzcwNTg4MTksImRhdGEiOnsidXNlciI6eyJpZCI6IjMifX19.xXFszTabc6gbbBNuEQw_G6IV4ezwJ9xiPthNLt3XDhw'});
    let options = {headers: headers};
      return this.http.delete(`${baseUrl}wp/v2/pages/${id}`,options);
    
  }
  

  

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
