import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
import{ Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  alert:boolean = false
  
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {

  }

  handleLogin() {
    var username = (<HTMLSelectElement>document.getElementById('username')).value;
    var password = (<HTMLSelectElement>document.getElementById('password')).value;
    console.log(username);
    console.log(password);

    this.hardcodedAuthenticationService.loginUser().subscribe((result:any) => {
      for ( var i = 0; i < result.length; i++) {
              if (username.localeCompare(result[i].username) == 0 && password.localeCompare(result[i].password) == 0) {
                console.log("done");
      
                sessionStorage.setItem('authenticaterUser', username);
                this.router.navigate(['home']);
                this.alert = false;
      
              } else{
                this.alert = true;
              }
            }
    })
  //   this.hardcodedAuthenticationService.loginUser().subscribe((result:any) -> {
  //     for ( var i = 0; i < result.length; i++) {
  //       if (username.localeCompare(result[i].username) == 0 && password.localeCompare(result[i].password) == 0) {
  //         console.log("done");

  //         sessionStorage.setItem('hardauthenticateUser', username);
  //         this.router.navigate(['home']);
  //         this.alert = false;

  //       } else{
  //         this.alert = true;
  //       }
  //     }
    
  
  //   })

   }

  
  }