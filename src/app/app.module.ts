import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AdmissionComponent } from './admission/admission.component';
import { ExaminationComponent } from './examination/examination.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BcaComponent } from './bca/bca.component';
import { McaComponent } from './mca/mca.component';
import { BbaComponent } from './bba/bba.component';
import { MbaComponent } from './mba/mba.component';
import { CComponent } from './bca/c/c.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DbmsComponent } from './bca/dbms/dbms.component';
import { OsComponent } from './bca/os/os.component';
import { CnComponent } from './bca/cn/cn.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { MfComponent } from './bca/mf/mf.component';
import { Sem1Component } from './mca/sem1/sem1.component';
import { Sem2Component } from './mca/sem2/sem2.component';
import { Sem3Component } from './mca/sem3/sem3.component';
import { Sem4Component } from './mca/sem4/sem4.component';
import { Sem5Component } from './mca/sem5/sem5.component';
import { Sem6Component } from './mca/sem6/sem6.component';
import { SubjectComponent } from './mca/sem1/subject/subject.component';
import { TimetableComponent } from './mca/sem1/timetable/timetable.component';
import { AssignmentComponent } from './mca/sem1/assignment/assignment.component';
import { ClasstestComponent } from './mca/sem1/classtest/classtest.component';
import { MidtermComponent } from './mca/sem1/midterm/midterm.component';
import { EndtermComponent } from './mca/sem1/endterm/endterm.component';
import { CprogComponent } from './mca/sem1/cprog/cprog.component';
import { CoaComponent } from './mca/sem1/coa/coa.component';
import { MfunComponent } from './mca/sem1/mfun/mfun.component';
import { DatabasemsComponent } from './mca/sem1/databasems/databasems.component';
import { CplabComponent } from './mca/sem1/cplab/cplab.component';
import { WstComponent } from './mca/sem1/wst/wst.component';
import { SkComponent } from './mca/sem1/sk/sk.component';
import { Sl1Component } from './mca/sem1/sl1/sl1.component';
import { DiscretestrucComponent } from './mca/sem1/discretestruc/discretestruc.component';
import { MdsaComponent } from './mca/sem2/mdsa/mdsa.component';
import { MosComponent } from './mca/sem2/mos/mos.component';
import { MseComponent } from './mca/sem2/mse/mse.component';
import { StComponent } from './mca/sem2/st/st.component';
import { FaComponent } from './mca/sem2/fa/fa.component';
import { DatabasemslabComponent } from './mca/sem2/databasemslab/databasemslab.component';
import { MdslabComponent } from './mca/sem2/mdslab/mdslab.component';
import { Project1Component } from './mca/sem2/project1/project1.component';
import { Sl2Component } from './mca/sem2/sl2/sl2.component';
import { Sem2midtermComponent } from './mca/sem2/sem2midterm/sem2midterm.component';
import { Sem2endtermComponent } from './mca/sem2/sem2endterm/sem2endterm.component';
import { Sem2assignmentComponent } from './mca/sem2/sem2assignment/sem2assignment.component';
import { Sem2classtestComponent } from './mca/sem2/sem2classtest/sem2classtest.component';
import { HttpClientModule } from '@angular/common/http';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { NoticeComponent } from './admin/notice/notice.component';



const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
     { path: 'home', component: HomeComponent},
     { path: 'mca', component: HomeComponent},
     { path: 'bca', component: HomeComponent},
     { path: 'mba', component: HomeComponent},
     { path: 'bba', component: HomeComponent},
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
 

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    ExaminationComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ErrorComponent,
    BcaComponent,
    McaComponent,
    BbaComponent,
    MbaComponent,
    CComponent,
    DbmsComponent,
    OsComponent,
    CnComponent,
    RegisterComponent,
    ContactComponent,
    MfComponent,
    Sem1Component,
    Sem2Component,
    Sem3Component,
    Sem4Component,
    Sem5Component,
    Sem6Component,
    SubjectComponent,
    TimetableComponent,
    AssignmentComponent,
    ClasstestComponent,
    MidtermComponent,
    EndtermComponent,
    CprogComponent,
    CoaComponent,
    MfunComponent,
    DatabasemsComponent,
    CplabComponent,
    WstComponent,
    SkComponent,
    Sl1Component,
    DiscretestrucComponent,
    MdsaComponent,
    MosComponent,
    MseComponent,
    StComponent,
    FaComponent,
    DatabasemslabComponent,
    MdslabComponent,
    Project1Component,
    Sl2Component,
    Sem2midtermComponent,
    Sem2endtermComponent,
    Sem2assignmentComponent,
    Sem2classtestComponent,
    AdminComponent,
    ProfileComponent,
    DashboardComponent,
    AdminheaderComponent,
    NoticeComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    // CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    // MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
