import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/USER/navbar/navbar.component';
import { USERDASHBOARDComponent } from './pages/USER/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/USER/user-home/user-home.component';
import { AdminHomeComponent } from './pages/ADMIN/admin-home/admin-home.component';
import { AdminDashboardComponent } from './pages/ADMIN/admin-dashboard/admin-dashboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SidebarComponent } from './pages/USER/sidebar/sidebar.component';
import { UserProfileComponent } from './pages/USER/user-profile/user-profile.component';
import { UserSkiilsComponent } from './pages/USER/user-skiils/user-skiils.component';
import { UserProjectComponent } from './pages/USER/user-project/user-project.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProjectStatusComponent } from './pages/USER/project-status/project-status.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { EmailVerificationComponent } from './pages/USER/email-verification/email-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    USERDASHBOARDComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    SidebarComponent,
    UserProfileComponent,
    UserSkiilsComponent,
    UserProjectComponent,
    ProjectStatusComponent,
    EmailVerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SweetAlert2Module,
    MatListModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
