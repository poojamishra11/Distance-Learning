import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import{ Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
     console.log(this.username)
     console.log(this.password)

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['home'])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }

}
