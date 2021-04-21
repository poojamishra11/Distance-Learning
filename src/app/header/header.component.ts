import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  name =''
  isUserloggedIn: boolean = false;
  public isMenuCollapsed = true;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService, 
    private route: ActivatedRoute ) { }
  

  ngOnInit(): void {
    this.isUserloggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    this.name = this.route.snapshot.params['name']
  }

}
