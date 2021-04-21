import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerUsers = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    username : new FormControl(""),
    password : new FormControl("")

  })
  errorMessage = 'Invalid Credentials'
  invalidRegister = false

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService

  ) { }

  ngOnInit(): void {
  }
  handleRegister() {
   this.hardcodedAuthenticationService.userRegister(this.registerUsers.value).subscribe((res)=>{
     console.log(res)
     this.router.navigate(['login'])
   })
   
   
  }

}
