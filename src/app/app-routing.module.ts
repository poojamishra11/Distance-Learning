import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NoticeComponent } from './admin/notice/notice.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AdmissionComponent } from './admission/admission.component';
import { BbaComponent } from './bba/bba.component';
import { BcaComponent } from './bca/bca.component';
import { CComponent } from './bca/c/c.component';
import { CnComponent } from './bca/cn/cn.component';
import { DbmsComponent } from './bca/dbms/dbms.component';
import { MfComponent } from './bca/mf/mf.component';
import { OsComponent } from './bca/os/os.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ExaminationComponent } from './examination/examination.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MbaComponent } from './mba/mba.component';
import { McaComponent } from './mca/mca.component';
import { AssignmentComponent } from './mca/sem1/assignment/assignment.component';
import { ClasstestComponent } from './mca/sem1/classtest/classtest.component';
import { CoaComponent } from './mca/sem1/coa/coa.component';
import { CplabComponent } from './mca/sem1/cplab/cplab.component';
import { CprogComponent } from './mca/sem1/cprog/cprog.component';
import { DatabasemsComponent } from './mca/sem1/databasems/databasems.component';
import { DiscretestrucComponent } from './mca/sem1/discretestruc/discretestruc.component';
import { EndtermComponent } from './mca/sem1/endterm/endterm.component';
import { MfunComponent } from './mca/sem1/mfun/mfun.component';
import { MidtermComponent } from './mca/sem1/midterm/midterm.component';
import { Sem1Component } from './mca/sem1/sem1.component';
import { SkComponent } from './mca/sem1/sk/sk.component';
import { Sl1Component } from './mca/sem1/sl1/sl1.component';
import { SubjectComponent } from './mca/sem1/subject/subject.component';
import { TimetableComponent } from './mca/sem1/timetable/timetable.component';
import { WstComponent } from './mca/sem1/wst/wst.component';
import { DatabasemslabComponent } from './mca/sem2/databasemslab/databasemslab.component';
import { FaComponent } from './mca/sem2/fa/fa.component';
import { MdsaComponent } from './mca/sem2/mdsa/mdsa.component';
import { MdslabComponent } from './mca/sem2/mdslab/mdslab.component';
import { MosComponent } from './mca/sem2/mos/mos.component';
import { MseComponent } from './mca/sem2/mse/mse.component';
import { Project1Component } from './mca/sem2/project1/project1.component';
import { Sem2Component } from './mca/sem2/sem2.component';
import { Sem2assignmentComponent } from './mca/sem2/sem2assignment/sem2assignment.component';
import { Sem2classtestComponent } from './mca/sem2/sem2classtest/sem2classtest.component';
import { Sem2endtermComponent } from './mca/sem2/sem2endterm/sem2endterm.component';
import { Sem2midtermComponent } from './mca/sem2/sem2midterm/sem2midterm.component';
import { Sl2Component } from './mca/sem2/sl2/sl2.component';
import { StComponent } from './mca/sem2/st/st.component';
import { Sem3Component } from './mca/sem3/sem3.component';
import { Sem4Component } from './mca/sem4/sem4.component';
import { Sem5Component } from './mca/sem5/sem5.component';
import { Sem6Component } from './mca/sem6/sem6.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './service/route-guard.service';




const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'admission', component:AdmissionComponent,  canActivate: [RouteGuardService]},
  { path: 'examination', component:ExaminationComponent,  canActivate: [RouteGuardService]},
  { path: 'home', component:HomeComponent},
  { path: 'logout', component:LogoutComponent},
  {path: 'bca', component:BcaComponent},
  {path: 'c', component:CComponent}, 
  {path: 'dbms', component:DbmsComponent}, 
  {path: 'os', component:OsComponent}, 
  {path: 'cn', component:CnComponent},
  {path: 'mf', component:MfComponent}, 
  {path: 'mca', component:McaComponent},
  {path:'sem1', component:Sem1Component},
  {path:'cprog', component:CprogComponent},
  {path:'coa', component:CoaComponent},
  {path:'discretestruc', component:DiscretestrucComponent},
  {path:'mfun', component:MfunComponent},
  {path:'cplab', component:CplabComponent},
  {path:'databasems', component:DatabasemsComponent},
  {path:'wst', component:WstComponent},
  {path:'sk', component:SkComponent},
  {path:'sl1', component:Sl1Component},
  {path:'subject', component:SubjectComponent},
  {path:'timetable', component:TimetableComponent},
  {path:'assignment', component:AssignmentComponent},
  {path:'classtest', component:ClasstestComponent},
  {path:'midterm', component:MidtermComponent},
  {path:'endterm', component:EndtermComponent},
  {path:'sem2', component:Sem2Component},
  {path:'mdsa', component:MdsaComponent},
  {path:'mos', component:MosComponent},
  {path:'mse', component:MseComponent},
  {path:'st', component:StComponent},
  {path:'fa', component:FaComponent},
  {path:'databasemslab', component:DatabasemslabComponent},
  {path:'mdslab', component:MdslabComponent},
  {path:'project1', component:Project1Component},
  {path:'sem2assignment', component:Sem2assignmentComponent},
  {path:'sem2classtest', component:Sem2classtestComponent},
  {path:'sem2midterm', component:Sem2midtermComponent},
  {path:'sem2endterm', component:Sem2endtermComponent},
  {path:'sl2', component:Sl2Component},
  {path:'sem3', component:Sem3Component},
  {path:'sem4', component:Sem4Component},
  {path:'sem5', component:Sem5Component},
  {path:'sem6', component:Sem6Component},
  {path: 'bba', component:BbaComponent},
  {path: 'mba', component:MbaComponent},
  {path: 'register', component:RegisterComponent}, 
  {path:'contact', component:ContactComponent},
  {path:'admin', component:AdminComponent},
  {path:'notice', component:NoticeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'adminheader', component:AdminheaderComponent},
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
