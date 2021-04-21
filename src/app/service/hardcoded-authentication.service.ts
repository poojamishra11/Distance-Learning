import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  url = "http://localhost:3000/register"

  constructor(private http: HttpClient) { }
 

  

  

  userRegister(data: any){
   return this.http.post<any[]>(this.url,data) 
  }

  loginUser() {
    return this.http.get<any[]>(this.url);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }


}
