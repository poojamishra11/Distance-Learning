import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  redirectToHome(){
    this.router.navigateByUrl('dashboard/home');
  }
  redirectToAbout(){
    this.router.navigateByUrl('dashboard/about');
  }
  logMeOut(){
    this.router.navigateByUrl('login');
  }
}

