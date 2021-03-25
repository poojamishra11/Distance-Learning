import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseComponent } from './course/course.component';
import { ErrorComponent } from './error/error.component';
import { ExaminationComponent } from './examination/examination.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'admission', component:AdmissionComponent,  canActivate: [RouteGuardService]},
  { path: 'examination', component:ExaminationComponent,  canActivate: [RouteGuardService]},
  { path: 'course', component:CourseComponent, canActivate: [RouteGuardService]},
  { path: 'assignment', component:AssignmentComponent,  canActivate: [RouteGuardService]},
  { path: 'login', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'logout', component:LogoutComponent},
  { path: '**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule,
            BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
