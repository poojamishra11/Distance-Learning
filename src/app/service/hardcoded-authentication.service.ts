import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  url = "http://localhost:3000/register"

  constructor(private http: HttpClient) { }
 

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  

  userRegister(data: any){
   return this.http.post<any[]>(this.url,data) 
  }

  loginUser() {
    return this.http.get<any[]>(this.url);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }


}
